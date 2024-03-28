import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const MainWrapper = styled('main')`
    height: 100vh;
`

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
