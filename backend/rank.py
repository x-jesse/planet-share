import googlemaps
import json
import os
import pandas as pd
from datetime import datetime
from dotenv import load_dotenv


def calculate_distance(address1, address2):
    '''
    Calculate the distance between two addresses in km.

    Args:
        address1: str
        address2: str

    Returns:
        distance (km): str
    '''
    load_dotenv()
    gmaps = googlemaps.Client(key=os.getenv("GOOGLE_MAPS_API_KEY"))
    start_location = gmaps.geocode(address1)[0]['geometry']['location']
    end_location = gmaps.geocode(address2)[0]['geometry']['location']

    directions_result = gmaps.directions(
        origin=(start_location['lat'], start_location['lng']),
        destination=(end_location['lat'], end_location['lng']),
        mode="driving"
    )

    route = directions_result[0]
    legs = route['legs'][0]
    distance = legs['distance']['text']
    print(distance)
    if distance.endswith('km'):
        distance = distance[:-3]
        distance = float(distance)
    else:
        distance = distance[:-2]
        distance = float(distance) / 1000

    return distance


def is_match(user1_data, user2_data, max_start_diff=3, max_end_diff=3, max_time_diff=10):
    '''
    Args: 
        user1_data: dict
        user2_data: dict
        max_start_diff: int
        max_end_diff: int
        max_time_diff: int

    Returns:
        is_match: bool
    '''
    max_start_diff = float(max_start_diff)
    max_end_diff = float(max_end_diff)
    max_time_diff = float(max_time_diff)
    print(max_start_diff, max_end_diff, max_time_diff)

    user1_start_location = user1_data["start_location"]
    user1_end_location = user1_data["end_location"]
    user1_departure_time = user1_data["departure_time"]

    user2_start_location = user2_data["start_location"]
    user2_end_location = user2_data["end_location"]
    user2_departure_time = user2_data["departure_time"]
    
    # Check if user1 and user2 start and end within 3 km of each other
    start_difference = calculate_distance(user1_start_location, user2_start_location)
    end_difference = calculate_distance(user1_end_location, user2_end_location)

    # Get difference between departure times in minutes
    time_format = "%Y-%m-%dT%H:%M:%S"
    user1_departure_datetime = datetime.strptime(user1_departure_time, time_format)
    user2_departure_datetime = datetime.strptime(user2_departure_time, time_format)
    diff_in_minutes = (user1_departure_datetime - user2_departure_datetime).total_seconds() / 60

    if start_difference <= max_start_diff and end_difference <= max_end_diff and diff_in_minutes <= max_time_diff:
        return True
    return False


def rank_matches(user_data, matches_data, max_start_diff, max_end_diff, max_time_diff):
    '''
    Rank based on the following:
        1. Distance between the start and end locations of the two users (in km)
        2. Difference in departure times (in minutes)
        3. Vehicle type (electric > hybrid > gasoline)
    
    Args:
        user_data: pd.Series
        matches_data: pd.DataFrame
        max_start_diff: int
        max_end_diff: int
        max_time_diff: int

    Returns:
        df_sorted: pd.DataFrame
    '''
    # Create a copy of the matches_data to avoid SettingWithCopyWarning
    df = matches_data.copy()

    # Ensure matches are valid based on maximum distance diff and time diff
    df = df[df.apply(lambda row: is_match(row, user_data, max_start_diff, max_end_diff, max_time_diff), axis=1)]

    # Convert departure_time to datetime for both user_data and df
    user_departure_time = pd.to_datetime(user_data['departure_time'])
    df['departure_time'] = pd.to_datetime(df['departure_time'])

    # Calculate distance difference between the start and end locations
    df['start_location_diff'] = df['start_location'].apply(lambda x: calculate_distance(user_data['start_location'], x))
    df['end_location_diff'] = df['end_location'].apply(lambda x: calculate_distance(user_data['end_location'], x))
    df['distance'] = df['start_location_diff'] + df['end_location_diff']

    # Calculate the difference in departure times
    df['time_diff'] = abs((df['departure_time'] - user_departure_time).dt.total_seconds() / 60)

    # Create a numeric column for vehicle type sorting
    vehicle_type_order = {'electric': 2, 'hybrid': 1, 'gasoline': 0}
    df['vehicle_type_numeric'] = df['vehicle_type'].map(vehicle_type_order)

    # Sort the DataFrame and drop temp cols
    df_sorted = df.sort_values(by=['distance', 'time_diff', 'vehicle_type_numeric'], 
                               ascending=[True, True, False])
    df_sorted = df_sorted.drop(['start_location_diff', 'end_location_diff', 'vehicle_type_numeric', 'time_diff'], axis=1)

    return df_sorted


if __name__ == "__main__":
    with open('./examples.json', 'r') as file:
        data = json.load(file)
    
    # Create DataFrame
    df = pd.DataFrame(data)

    # Ensure all columns except departure_time are strings
    string_columns = ['username', 'vehicle_type', 'start_location', 'end_location']
    for col in string_columns:
        df[col] = df[col].astype(str)

    # Create sample dataframe
    user_data = df.iloc[0]
    matches_data = df.iloc[1:]
    print(user_data)
    print(matches_data)

    # Rank the matches
    df_sorted = rank_matches(user_data, matches_data)
    # print(df_sorted)