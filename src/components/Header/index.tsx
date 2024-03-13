import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppBar, IconButton, TextField, Toolbar, Tooltip } from '@mui/material'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import Navigation from './Navigation'
import UnitSelect from './UnitSelect'
import { SearchWrapper } from './styles'

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <SearchWrapper>
                    <Tooltip title="Search location not available yet">
                        <TextField
                            id="location"
                            variant="outlined"
                            label="Search Location"
                            disabled={true}
                        ></TextField>
                    </Tooltip>
                </SearchWrapper>
                <UnitSelect />
            </Toolbar>
            <Toolbar>
                <Navigation />
                <IconButton onClick={() => toggleDarkMode()}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
