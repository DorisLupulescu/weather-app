import { createTheme } from '@mui/material'

const getThemeMode = (mode: boolean) =>
    createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
            secondary: {
                light: '#c29bc730',
                main: '#ab47bc',
                dark: '#f3e5f530',
            },
            info: {
                light: '#b5ced95c',
                main: '#0288d1',
                dark: '#b5ced93b',
            },
            success: {
                light: '#a0bba14a',
                main: '#388e3c',
                dark: '#c0d1c02e',
            },
            warning: {
                light: '#c5a47333',
                main: '#f57c00',
                dark: '#d3be9f36',
            },
        },
    })

export { getThemeMode }
