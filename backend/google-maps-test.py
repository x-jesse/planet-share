import googlemaps
from datetime import datetime

MAPS_API="AIzaSyDbsgWQtWkIKathUNaWAN0AeW7jPvPuGh8"
gmaps = googlemaps.Client(key=MAPS_API)


def calculate_distance(start_address, end_address):
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


if __name__ == "__main__":
    start_location = "5658 Glen Erin Drive, Mississauga, ON"
    end_location = "105 Commerce Valley Dr W, Markham, ON"

    distance, duration = calculate_distance(start_location, end_location)
    print(f"Distance: {distance}")
    print(f"Duration: {duration}")