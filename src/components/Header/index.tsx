import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import Navigation from './Navigation'
import UnitSelect from './UnitSelect'
import { SearchField, SearchWrapper, UtilityWrapper } from './styles'

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <SearchWrapper>
                    <Tooltip title="Search location not available yet">
                        <SearchField
                            id="location"
                            variant="outlined"
                            label="Search Location"
                            disabled={true}
                        ></SearchField>
                    </Tooltip>
                </SearchWrapper>
                <Navigation />
                <UtilityWrapper>
                    <UnitSelect />
                    <IconButton onClick={() => toggleDarkMode()}>
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </UtilityWrapper>
            </Toolbar>
        </AppBar>
    )
}

export default Header
