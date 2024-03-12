import { Typography } from '@mui/material'
import { Button } from './styles'

const NavigationButton = ({
    color,
    children,
}: {
    children: string
    color: string
}) => {
    return (
        <Button color={color}>
            <Typography>{children}</Typography>
        </Button>
    )
}

export default NavigationButton
