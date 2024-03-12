import { useMediaQuery } from '@mui/material'
import { ReactNode, createContext, useState } from 'react'

interface IDarkModeProvider {
    children: ReactNode
}

interface IDarkModeContext {
    darkMode: boolean
    toggleDarkMode: () => void
}

const DarkModeContext = createContext<IDarkModeContext>({
    darkMode: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleDarkMode: () => {},
})

const DarkModeProvider = ({ children }: IDarkModeProvider) => {
    const systemMode = useMediaQuery('(prefers-color-scheme: dark)')
    const storedMode = localStorage.getItem('darkMode')

    const isDefaultDarkMode = storedMode ? JSON.parse(storedMode) : systemMode
    const [darkMode, setDarkMode] = useState<boolean>(isDefaultDarkMode)

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev)
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeProvider }
