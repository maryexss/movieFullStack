import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, FormControl, Select, MenuItem } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/generalReducer";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";
import SearchBar from "./SearchBar";


export default function SearchAppBar() {
    let theme = useTheme();
    let t = useSelector((state) => state.general.theme);
    let dispatch = useDispatch();
    let { t: translate, i18n } = useTranslation();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                            fontFamily: theme.typography.title,
                        }}
                    >
                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <Trans>title</Trans>
                        </Link>
                    </Typography>
                    <FormControl variant="standard">
                        <Select
                            value={i18n.language}
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                        >
                            <MenuItem value={"en"}>English</MenuItem>
                            <MenuItem value={"uk"}>Українська</MenuItem>
                            <MenuItem value={"fr"}>Francais</MenuItem>
                            <MenuItem value={"de"}>Deutsch</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="text"
                        color="inherit"
                        onClick={() =>
                            dispatch(
                                changeTheme(t === "light" ? "dark" : "light")
                            )
                        }
                    >
                        {t === "light" ? <WbSunnyIcon /> : <ModeNightIcon />}
                    </Button>
                    <SearchBar />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
