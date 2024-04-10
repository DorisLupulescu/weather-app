import ThermostatIcon from '@mui/icons-material/Thermostat'
import {
    Box,
    Button as ButtonMui,
    List as ListMui,
    styled,
    TextField,
} from '@mui/material'
import { NavLink as NavLinkRouter } from 'react-router-dom'

const List = styled(ListMui)`
    display: flex;
    flex: auto;
    justify-content: space-evenly;
    padding-left: 5rem;
`

const SearchWrapper = styled(Box)`
    display: flex;
`

const UtilityWrapper = styled(Box)`
    display: flex;
`

const NavLink = styled(NavLinkRouter)(({ theme, bgcolor }) => ({
    '&.active button': {
        backgroundColor: theme.palette[bgcolor].light,
    },
}))

const Button = styled(ButtonMui)`
    color: ${(props) => props.color};
`

const UnitIcon = styled(ThermostatIcon)`
    height: auto;
`

const SearchField = styled(TextField)`
    overflow: hidden;
    border-radius: 4rem;
    box-shadow:
        0 4px 6px -5px hsl(0, 0%, 40%),
        inset 0px 4px 6px -5px #696469;
    .MuiOutlinedInput-notchedOutline {
        border: none;
    }
`

export {
    Button,
    List,
    NavLink,
    SearchField,
    SearchWrapper,
    UnitIcon,
    UtilityWrapper,
}
