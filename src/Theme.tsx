import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

const theme = createTheme({

    palette: {
        primary: {
            main: '#4E2363',
        },
        secondary: {
            main: '#7A3293',
        },
        neutral: {
            main: '#64748B',
        },

    },
});

export default theme;

