export interface ICurrentWeather {
    location: string
    date: string
    sunrise: string
    sunset: string
    visibility: number //meters
    windSpeed: number //metre/sec
    humidity: number
    feelsLike: number
    temperature: number
    temperatureMax: number
    temperatureMin: number
    imagePath: string
    description: string
}
