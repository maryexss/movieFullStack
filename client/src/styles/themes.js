import { createTheme } from "@mui/material";

let darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#3a9cbd",
        },
        secondary: {
            main: "#71c4ef",
        },
        background: {
            default: "#4e4e4e",
            paper: "#393939",
        },
        text: {
            primary: "#e0e0e0",
        },
    },
typography: {
    fontFamily: "PT Sans Caption, sans-serif",
    title: "Monoton",
},
    
});

let lightTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#42acd0",
        },
        secondary: {
            main: "#71c4ef",
        },
        background: {
            default: "#fffefb",
        },
        text: {
            primary: "#1d1c1c",
        },
    },
    typography: {
        fontFamily: "PT Sans Caption, sans-serif",
        title: "Monoton",
    },
});

export { darkTheme, lightTheme };
