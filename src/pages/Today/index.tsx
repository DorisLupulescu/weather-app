import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayInfo from '../../components/DisplayInfo'
import { fetchWeather } from '../../redux/slices/todayWeather'
import { AppDispatch, RootState } from '../../redux/store'
import { UNIT_SYMBOL } from '../../utils/constants'
import { initialWeatherToday } from './constants'
import { IWeatherLabel } from './interfaces'
import {
    ContentContainer,
    GridDisplay,
    ImageWrapper,
    MainTemperature,
    TemperatureDetails,
    TemperatureSpecifications,
    WeatherWrapper,
} from './styles'

const Today = () => {
    const unit = useSelector((state: RootState) => state.settings.unit)
    const { weather, error, loaded } = useSelector(
        (state: RootState) => state.weather
    )
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchWeather(unit))
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

    return (
        <ContentContainer>
            <WeatherWrapper>
                <ImageWrapper src={weather.imagePath} alt="sunny" />
                <TemperatureDetails>
                    <MainTemperature>
                        {weather.temperature} {UNIT_SYMBOL[unit]}
                    </MainTemperature>
                    <TemperatureSpecifications variant="subtitle1">
                        {weather.location} {weather.date}
                    </TemperatureSpecifications>
                    <TemperatureSpecifications variant="subtitle1">
                        Feels like {weather.feelsLike}
                        {UNIT_SYMBOL[unit]}
                    </TemperatureSpecifications>
                    <TemperatureSpecifications variant="subtitle1">
                        {weather.description}
                    </TemperatureSpecifications>
                </TemperatureDetails>
            </WeatherWrapper>
            <WeatherWrapper>
                <Grid container>{mapWeatherDetails()}</Grid>
            </WeatherWrapper>
        </ContentContainer>
    )
}

export default Today
