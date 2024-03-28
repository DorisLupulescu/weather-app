import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import CloudIcon from '@mui/icons-material/Cloud'
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { Box, CircularProgress, styled } from '@mui/material'

const WeatherWrapper = styled(Box)`
    box-shadow: 0 0 0.75rem 0 rgba(0, 0, 0, 0.2);
    width: 50rem;
    height: 18rem;
    margin-top: 4rem;
    display: flex;
    font-size: large;
`

const ImageWrapper = styled('img')`
    width: 11rem;
    height: 11rem;
    border: transparent;
    border-radius: 50%;
    padding: 2rem;
`

const Spinner = styled(CircularProgress)`
    justify-content: center;
    height: 95vh;
    vertical-align: middle;
    display: grid;
    align-items: center;
`

const ContentContainer = styled('div')`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const TemperatureDetails = styled('div')`
    flex: auto;
`

const WeatherDetails = styled('div')`
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
`

const MainTemperature = styled('p')`
    font-size: xxx-large;
    padding-left: 3rem;
`

const Clouds = styled(CloudIcon)`
    color: #a2b6d6;
`

const Sunrise = styled(WbSunnyRoundedIcon)`
    color: orange;
`

const Sunset = styled(NightsStayRoundedIcon)`
    color: #494874;
`

const Humidity = styled(WaterDropIcon)`
    color: #6a6ad969;
`
const Pressure = styled(CloseFullscreenIcon)`
    transform: rotate(-0.125turn);
`

const WeatherDetailsInfo = styled('div')``

const WeatherDetailsValue = styled('div')``

export {
    Clouds,
    ContentContainer,
    Humidity,
    ImageWrapper,
    MainTemperature,
    Pressure,
    Spinner,
    Sunrise,
    Sunset,
    TemperatureDetails,
    WeatherDetails,
    WeatherDetailsInfo,
    WeatherDetailsValue,
    WeatherWrapper,
}
