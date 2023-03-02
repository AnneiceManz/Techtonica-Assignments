const coord = {
    lon: -105.075,
    lat: 40.3978,
    weather: [{
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
        base: "stations",
        main: {
            temp: 42.73,
            feels_like: 38.43,
            temp_min: 40.57,
            temp_max: 46.44,
            pressure: 1011,
            humidity: 52
            },
        visibility: 10000,
        wind: {
                speed: 7,
                deg: 128,
                gust: 11.99
            },
        clouds: {
            all: 0
        },
        dt: 1677788831,
        sys: {
            type: 2,
            id: 2041409,
            country: "US",
            sunrise: 1677763977,
            sunset: 1677804740
            },
        timezone: -25200,
        id: 5579368,
        name: "Loveland",
        cod: 200
        }
    ]
}



module.exports = coord;