import { Typography } from '@mui/material'
import { IDisplayInfo } from './interfaces'
import { WeatherDetailsValue } from './styles'

const DisplayInfo = ({ Icon, info, value }: IDisplayInfo) => {
    return (
        <>
            <Icon />
            <Typography>{info}</Typography>
            <WeatherDetailsValue> {value}</WeatherDetailsValue>
        </>
    )
}

export default DisplayInfo
