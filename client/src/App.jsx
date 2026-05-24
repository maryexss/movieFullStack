import { Route, Routes } from "react-router";
import Movie from "./pages/Movie";
import { useDispatch } from "react-redux";
import { getMovies, searchMovies } from "./store/APIReducer";
import SearchAppBar from "./components/Header";
import Footer from "./components/Footer";
import { Container, useTheme } from "@mui/material";
import Main from "./pages/Main";

function App() {
    // dispatch(searchMovies({ title: "The" }));
    let theme = useTheme();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                background: theme.palette.background.default 
            }}
        >
            <SearchAppBar />
            <Container sx={{ flexGrow: 1}}>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/*" element={<h1>Not Found</h1>} />
                </Routes>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
