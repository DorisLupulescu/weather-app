import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const MainWrapper = styled('main')(({ theme }) => ({
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
}))

const MainLayout = () => {
    return (
        <>
            <Header />
            <MainWrapper>
                <Outlet />
            </MainWrapper>
        </>
    )
}

export default MainLayout
