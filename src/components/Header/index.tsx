import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../../context/DarkModeContext'
import { NavigationWrapper } from './styles'

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const navigate = useNavigate()

    const navigateToToday = () => {
        navigate('/today')
    }

    const navigateToHourly = () => {
        navigate('/hourly')
    }

    const navigateToDaily = () => {
        navigate('/daily')
    }

    const navigateToMap = () => {
        navigate('/map')
    }

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <NavigationWrapper>
                    <Button color="secondary" onClick={navigateToToday}>
                        Today
                    </Button>
                    <Button color="info" onClick={navigateToHourly}>
                        Hourly
                    </Button>
                    <Button color="success" onClick={navigateToDaily}>
                        Daily
                    </Button>
                    <Button color="warning" onClick={navigateToMap}>
                        Map
                    </Button>
                </NavigationWrapper>
                <IconButton onClick={() => toggleDarkMode()}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
