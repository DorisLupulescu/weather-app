import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts'
import { Daily, Home, Hourly, Map, NotFound, Today } from './pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
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
])

function App() {
    return <RouterProvider router={router} />
}

export default App
