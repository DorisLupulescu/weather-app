import './App.css'

import { ThemeProvider } from '@mui/material'
import { useContext, useMemo } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getThemeMode } from '../src/styles/theme/Theme'
import { DarkModeContext } from './context/DarkModeContext'
import { UnitSystemProvider } from './context/UnitSystemContext'
import { MainLayout } from './layouts'
import { Daily, Hourly, Map, NotFound, Today } from './pages'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <NotFound />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/today" replace />,
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
            <UnitSystemProvider>
                <RouterProvider router={router} />
            </UnitSystemProvider>
        </ThemeProvider>
    )
}

export default App
