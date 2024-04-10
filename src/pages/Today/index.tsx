import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayInfo from '../../components/DisplayInfo'
import { RootState } from '../../redux/store'
import { UNIT_SYMBOL } from '../../utils/constants'
import { initialWeatherToday } from './constants'
import { IWeatherLabel, IWeatherValues } from './interfaces'
import {
    ContentContainer,
    GridDisplay,
    ImageWrapper,
    MainTemperature,
    Spinner,
    TemperatureDetails,
    WeatherWrapper,
} from './styles'
import { formatWeather } from './utils'

const Today = () => {
    const unit = useSelector((state: RootState) => state.settings.unit)
    const [weather, setWeather] = useState<IWeatherValues>({} as IWeatherValues)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=45.7537&lon=21.2257&units=${unit}&appid=354e28e030dab0e004f7986f2ab9b413`
            )
            .then((res) => {
                const formattedWeather = formatWeather(res.data, unit)
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

    const mapWeatherDetails = () => {
        return Object.keys(initialWeatherToday).map((key) => {
            const displayItem = getWeatherDisplayData(key)

            return (
                <GridDisplay key={displayItem.info} item xs={12} sm={6}>
                    <DisplayInfo
                        Icon={displayItem.icon}
                        info={displayItem.info}
                        value={displayItem.value}
                    />
                </GridDisplay>
            )
        })
    }

    const getWeatherDisplayData = (info: string): IWeatherLabel => {
        return {
            icon: initialWeatherToday[info].icon,
            info: initialWeatherToday[info].info,
            value: weather[info],
        }
    }

    return isLoaded ? (
        <ContentContainer>
            <WeatherWrapper>
                <ImageWrapper src={weather.imagePath} alt="sunny" />
                <TemperatureDetails>
                    <MainTemperature>
                        {weather.temperature} {UNIT_SYMBOL[unit]}
                    </MainTemperature>
                    <Typography>
                        {weather.location} {weather.date}
                    </Typography>
                    <Typography>
                        Feels like {weather.feelsLike}
                        {UNIT_SYMBOL[unit]}
                    </Typography>
                    <Typography>{weather.description}</Typography>
                </TemperatureDetails>
            </WeatherWrapper>
            <WeatherWrapper>
                <Grid container>{mapWeatherDetails()}</Grid>
            </WeatherWrapper>
        </ContentContainer>
    ) : (
        <Spinner color="secondary" size="10rem" />
    )
}

export default Today
