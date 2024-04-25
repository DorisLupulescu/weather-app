import { Typography, styled } from '@mui/material'

const WeatherDetailsValue = styled(Typography)`
    margin-right: 2.5rem;
`
const WeatherInfo = styled(Typography)`
    margin-left: 0.5rem;
`

const DottedLine = styled('hr')`
    border: none;
    border-bottom: 1px dotted white;
    color: white;
    background-color: #031425;
    height: 20%;
    width: 40%;
`

export { DottedLine, WeatherDetailsValue, WeatherInfo }
