import { createTheme } from "@mui/material/styles";
import "@fontsource/rubik";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Rubik',
            'sans-serif',
        ].join(','),
    },

    palette: {
        mode: 'dark',
        primary: {
            main: '#EEEF20',
        },
        secondary: {
            main: '#2B9348',
        },

    }
});

export default theme;
