import googlemaps
import os
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()
gmaps = googlemaps.Client(key=os.getenv("GOOGLE_MAPS_API_KEY"))


def calculate_distance(start_address, end_address):
    '''
    Args:
        start_address: str
        end_address: str

    Returns:
        distance (km): str
        duration (mins): str
    '''
    start_location = gmaps.geocode(start_address)[0]['geometry']['location']
    end_location = gmaps.geocode(end_address)[0]['geometry']['location']

    directions_result = gmaps.directions(
        origin=(start_location['lat'], start_location['lng']),
        destination=(end_location['lat'], end_location['lng']),
        mode="driving",
        departure_time = datetime.now()
    )

    route = directions_result[0]
    legs = route['legs'][0]
    distance = legs['distance']['text']
    duration = legs['duration']['text']

    return distance, duration


def calculate_carbon_footprint_reduction(start_address, end_address, vehicle_type):
    '''
    Args: 
        start_address: str
        end_address: str
        vehicle_type: str
    
    Returns:
        carbon_reduction: float
    '''
    # CO2 emission in grams per km according to MIT
    # https://climate.mit.edu/ask-mit/are-electric-vehicles-definitely-better-climate-gas-powered-cars
    gasoline = 217
    hybrid = 162
    electric = 124
    distance, _ = calculate_distance(start_address, end_address)
    distance = float(distance.split()[0])

    if vehicle_type == "gasoline":
        carbon_reduction = gasoline * distance
    elif vehicle_type == "hybrid":
        carbon_reduction = hybrid * distance
    elif vehicle_type == "electric":
        carbon_reduction = electric * distance
    else:
        raise ValueError("Invalid vehicle type")

    return carbon_reduction


def is_match(user1_data, user2_data):
    user1_start_location = user1_data["start_location"]
    user1_end_location = user1_data["end_location"]
    user1_departure_time = user1_data["departure_time"]

    user2_start_location = user2_data["start_location"]
    user2_end_location = user2_data["end_location"]
    user2_departure_time = user2_data["departure_time"]
    
    # Check if user1 and user2 start and end within 3 km of each other
    start_difference, _ = calculate_distance(user1_start_location, user2_start_location)
    end_difference, _ = calculate_distance(user1_end_location, user2_end_location)
    start_difference, end_difference = float(start_difference.split()[0]), float(end_difference.split()[0])

    # Get difference between departure times in minutes
    time_format = "%Y-%m-%dT%H:%M:%S"
    user1_departure_datetime = datetime.strptime(user1_departure_time, time_format)
    user2_departure_datetime = datetime.strptime(user2_departure_time, time_format)
    diff_in_minutes = (user1_departure_datetime - user2_departure_datetime).total_seconds() / 60

    if start_difference <= 3 and end_difference <= 3 and diff_in_minutes <= 10:
        return True
    return False


if __name__ == "__main__":
    start_location = "5658 Glen Erin Drive, Mississauga, ON"
    end_location = "105 Commerce Valley Dr W, Markham, ON"

    distance, duration = calculate_distance(start_location, end_location)
    print(f"Distance: {distance}")
    print(f"Duration: {duration}")

    vehicle_type = "gasoline"
    carbon_reduction = calculate_carbon_footprint_reduction(start_location, end_location, vehicle_type)
    print(f"Carbon reduction: {carbon_reduction} grams")

    sample_user_1 = {
        "username": "testuser1",
        "vehicle_type": "electric",
        "start_location": "2640 Thomas St, Mississauga, ON",
        "end_location": "1 Commerce Valley Dr E, Thornhill, ON",
        "departure_time": "2021-09-01T08:00:00"
    }

    sample_user_2 = {
        "username": "testuser2",
        "vehicle_type": "gasoline",
        "start_location": "5658 Glen Erin Drive, Mississauga, ON",
        "end_location": "105 Commerce Valley Dr W, Markham, ON",
        "departure_time": "2021-09-01T08:00:00"
    }

    print(is_match(sample_user_1, sample_user_2))

