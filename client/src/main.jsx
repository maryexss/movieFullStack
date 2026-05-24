import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store.js";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { useEffect } from "react";
import { loadThemeFromLocalStorage } from "./store/generalReducer.js";
import "./i18next";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <Wrapper />
        </Provider>
    </BrowserRouter>
);

function Wrapper() {
    let theme = useSelector((state) => state.general.theme);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadThemeFromLocalStorage())
    }, []);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <App />
        </ThemeProvider>
    );
}