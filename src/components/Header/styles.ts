import {
    Box,
    Button as ButtonMui,
    List as ListMui,
    styled,
} from '@mui/material'
import { NavLink as NavLinkRouter } from 'react-router-dom'

const List = styled(ListMui)`
    display: flex;
    flex: auto;
    justify-content: space-evenly;
`

const SearchWrapper = styled(Box)`
    display: flex;
    flex: auto;
    justify-content: center;
`

const NavLink = styled(NavLinkRouter)(({ theme, bgColor }) => ({
    '&.active button': {
        backgroundColor: theme.palette[bgColor].light,
    },
}))

const Button = styled(ButtonMui)`
    color: ${(props) => props.color};
`

export { Button, List, NavLink, SearchWrapper }
