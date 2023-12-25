import './App.css'

import { ThemeProvider } from '@mui/material'
import { useContext, useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DarkModeContext } from './context/DarkModeContext'
import { MainLayout } from './layouts'
import { Daily, Home, Hourly, Map, NotFound, Today } from './pages'
import { getThemeMode } from './theme'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <NotFound />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/today',
                    element: <Today />,
                },
                {
                    path: '/hourly',
                    element: <Hourly />,
                },
                {
                    path: '/daily',
                    element: <Daily />,
                },
                {
                    path: '/map',
                    element: <Map />,
                },
            ],
        },
    ],
    { basename: '/weather-app' }
)

function App() {
    const { darkMode } = useContext(DarkModeContext)

    const theme = useMemo(() => getThemeMode(darkMode), [darkMode])

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
