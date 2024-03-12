import AirIcon from '@mui/icons-material/Air'
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded'
import VisibilityIcon from '@mui/icons-material/Visibility'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { CircularProgress } from '@mui/material'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UnitSystemContext } from '../../context/UnitSystemContext'
import { UNIT_DISTANCE, UNIT_SYMBOL } from '../../utils/constants'
import { ICurrentWeather } from './interfaces'
import { WeatherWrapper } from './styles'
import './today.css'
import { formatWeather, initializeEmptyWeather } from './utils'

const Today = () => {
    const { unit } = useContext(UnitSystemContext)
    const [weather, setWeather] = useState<ICurrentWeather>(
        initializeEmptyWeather()
    )
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=45.7537&lon=21.2257&units=${unit}&appid=354e28e030dab0e004f7986f2ab9b413`
            )
            .then((res) => {
                const formattedWeather = formatWeather(res.data)
                setWeather(formattedWeather)
                setIsLoaded(true)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.status)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('Error', error.message)
                }
                setError(error)
                setIsLoaded(true)
            })
    }, [unit])

    return isLoaded ? (
        <div id="container">
            <div>
                <p>
                    {weather?.location} {weather.date}
                </p>
            </div>
            <WeatherWrapper>
                <div id="weatherDescription">
                    <img src={weather.imagePath} alt="sunny" />
                </div>

                <div id="weather-details">
                    <p id="temperature">
                        {weather.temperature} {UNIT_SYMBOL[unit]}
                    </p>

                    <p>
                        Feels like {weather.feelsLike} {UNIT_SYMBOL[unit]}
                    </p>
                    <p>{weather.description}</p>
                </div>
            </WeatherWrapper>
            <WeatherWrapper>
                <div id="weather-details">
                    <p>
                        Sunrise <WbSunnyRoundedIcon sx={{ color: 'orange' }} />
                        {weather.sunrise}
                    </p>
                    <p>
                        Sunset <NightsStayRoundedIcon /> {weather.sunset}
                    </p>
                </div>
            </WeatherWrapper>
            <WeatherWrapper>
                <div id="weather-details">
                    <p>
                        Humidity <WaterDropIcon sx={{ color: '#6a6ad969' }} />
                        {weather.humidity}%
                    </p>
                    <p>
                        Visibility <VisibilityIcon /> {weather.visibility}m
                    </p>
                    <p>
                        Wind Speed <AirIcon /> {weather.windSpeed}
                        {UNIT_DISTANCE[unit]}
                    </p>
                </div>
            </WeatherWrapper>
        </div>
    ) : (
        <div id="spinnerWrapper">
            <CircularProgress color="secondary" size="10rem" />
        </div>
    )
}

export default Today
