import { SvgIcon } from '@mui/material'

export interface IWeatherLabel {
    icon: typeof SvgIcon | string
    info: string
    value: string | number
}
interface IDisplayWeatherKeys {
    [key: string]: IWeatherLabel
}
export interface IDisplayWeather extends IDisplayWeatherKeys {
    temperatureMaxMin: IWeatherLabel
    sunrise: IWeatherLabel
    sunset: IWeatherLabel
    visibility: IWeatherLabel
    windSpeed: IWeatherLabel
    humidity: IWeatherLabel
    clouds: IWeatherLabel
    pressure: IWeatherLabel
}

interface IWeatherValuesKeys {
    [key: string]: string | number
}
export interface IWeatherValues extends IWeatherValuesKeys {
    location: string
    date: string
    sunrise: string
    sunset: string
    visibility: string //meters
    windSpeed: string //metre/sec
    humidity: string
    feelsLike: number
    temperature: number
    temperatureMaxMin: string
    imagePath: string
    description: string
    clouds: string
    pressure: string
}
