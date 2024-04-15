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
            background: {
                default: mode ? '#3d4e5e' : '#f2f3f3',
            },
            text: {
                primary: mode ? '#f2f3f3' : '#031425',
            },
            boxColor: mode ? '#031425' : '#f2f3f3',
            boxShadow: mode
                ? '0 0 0.75rem 0 rgb(24 21 21)'
                : '0 0 0.75rem 0 rgba(0, 0, 0, 0.2)',
        },
    })

export { getThemeMode }
