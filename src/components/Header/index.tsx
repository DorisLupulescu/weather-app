import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import { NavigationWrapper } from './styles'

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <NavigationWrapper>
                    <Button color="secondary">Today</Button>
                    <Button color="info">Hourly</Button>
                    <Button color="success">Daily</Button>
                    <Button color="warning">Map</Button>
                </NavigationWrapper>
                <IconButton onClick={() => toggleDarkMode()}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
