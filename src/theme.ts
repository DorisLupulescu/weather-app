import { createTheme } from '@mui/material'

const getThemeMode = (mode: boolean) =>
    createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
        },
    })

export { getThemeMode }
