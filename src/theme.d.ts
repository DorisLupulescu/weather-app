import '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
        boxColor: string
        boxShadow: string
    }

    interface PaletteOptions {
        boxColor?: string
        boxShadow?: string
    }
}
