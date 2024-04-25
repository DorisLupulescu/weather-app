import { IDisplayInfo } from './interfaces'
import { DottedLine, WeatherDetailsValue, WeatherInfo } from './styles'

const DisplayInfo = ({ Icon, info, value }: IDisplayInfo) => {
    return (
        <>
            <Icon />
            <WeatherInfo>{info}</WeatherInfo>
            <DottedLine />
            <WeatherDetailsValue> {value}</WeatherDetailsValue>
        </>
    )
}

export default DisplayInfo
