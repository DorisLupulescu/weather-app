import { AppBar, Button, Toolbar } from '@mui/material'

const Header = () => {
    // initial setup
    return (
        <AppBar color="default">
            <Toolbar>
                <Button color="secondary">Today</Button>
                <Button color="info">Hourly</Button>
                <Button color="success">Daily</Button>
                <Button color="warning">Map</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
