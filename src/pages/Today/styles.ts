import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import CloudIcon from '@mui/icons-material/Cloud'
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { Box, Grid, Skeleton, Typography, styled } from '@mui/material'

const WeatherWrapper = styled(Box)(({ theme }) => ({
    boxShadow: theme.palette.boxShadow,
    width: '50rem',
    height: '18rem',
    marginTop: '4rem',
    display: 'flex',
    fontSize: 'large',
    padding: '1.5rem',
    backgroundColor: theme.palette.boxColor,
}))

const ImageWrapper = styled('img')`
    width: 11rem;
    height: 11rem;
    border: transparent;
    border-radius: 50%;
    padding: 2rem;
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
    padding-left: 2rem;
`

const MainTemperature = styled('p')`
    font-size: xxx-large;
    margin-left: 4rem;
`

const MainTemperatureLoader = styled(Skeleton)`
    width: 10rem;
`

const TemperatureSpecifications = styled(Typography)`
    margin: 0.5rem;
    padding-left: 1rem;
`
const FeelsLikeLoader = styled(Skeleton)`
    width: 5rem;
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

const GridDisplay = styled(Grid)`
    display: flex;
    align-items: center;
`
export {
    Clouds,
    ContentContainer,
    FeelsLikeLoader,
    GridDisplay,
    Humidity,
    ImageWrapper,
    MainTemperature,
    MainTemperatureLoader,
    Pressure,
    Sunrise,
    Sunset,
    TemperatureDetails,
    TemperatureSpecifications,
    WeatherWrapper,
}
