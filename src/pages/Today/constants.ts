import AirIcon from '@mui/icons-material/Air'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { IDisplayWeather } from './interfaces'
import { Clouds, Humidity, Pressure, Sunrise, Sunset } from './styles'

export const initialWeatherToday: IDisplayWeather = {
    sunrise: {
        icon: Sunrise,
        info: 'Sunrise',
        value: new Date().toLocaleString(),
    },
    sunset: {
        icon: Sunset,
        info: 'Sunset',
        value: new Date().toLocaleString(),
    },
    visibility: {
        icon: VisibilityIcon,
        info: 'Visibility',
        value: 0,
    },
    windSpeed: {
        icon: AirIcon,
        info: 'Wind',
        value: 0,
    },
    humidity: {
        icon: Humidity,
        info: 'Humidity',
        value: 0,
    },
    temperatureMaxMin: {
        icon: ThermostatIcon,
        info: 'Max/Min',
        value: 0,
    },
    clouds: {
        icon: Clouds,
        info: 'Clouds',
        value: 0,
    },
    pressure: {
        icon: Pressure,
        info: 'Pressure',
        value: 0,
    },
}
