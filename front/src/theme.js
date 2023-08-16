import { createTheme } from "@mui/material/styles";
import "@fontsource/rubik";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Rubik',
            'sans-serif',
        ].join(','),
    },
    shape: {
        borderRadius: '16px'
    },
    palette: {
        mode: 'dark',
        background:{
            default:'#495057',
            paper:'#495057'
        },
        primary: {
            main: '#EEEF20',
        },
        secondary: {
            main: '#2B9348',
        },

    }
});

export default theme;
