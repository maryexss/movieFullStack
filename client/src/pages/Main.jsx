import { CircularProgress, Grid2, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, changeOffset } from "../store/APIReducer";
import { Link } from "react-router";
import { Paper } from "@mui/material";
import SortBar from "../components/SortBar";

export default function Main() {
    let dispatch = useDispatch();
    let { sort, sortType, limit, offset, totalCount } = useSelector((state) => state.api);
    useEffect(() => {
        dispatch(getMovies({ limit, sort, sortType, offset }));
    }, [sort, sortType, limit, offset]);
    const movies = useSelector((state) => state.api.movies);
    let isLoading = useSelector((state) => state.api.loading);
    return (
        <Grid2 container spacing={2} sx={{ padding: "10px" }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
                <SortBar />
            </Grid2>
            {isLoading ? (
                <Grid2
                    size={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ textAlign: "center", padding: "10px" }}
                >
                    <CircularProgress size={100} />
                </Grid2>
            ) : (
                movies.map((movie, index) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Link
                            to={`/movie/${movie.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Paper sx={{ padding: "10px" }}>
                                <img
                                    style={{ width: "100%" }}
                                    src={
                                        "http://localhost:3000/posters/" +
                                        movie.poster_url
                                    }
                                    alt={movie.title}
                                />
                                <Typography variant="h6">
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2">
                                    {new Date(movie.release_data).getFullYear()}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid2>
                ))
            )}
            <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
                <Pagination
                    count={ Math.ceil(totalCount / limit) }
                    color="primary"
                    page={(offset / limit) + 1 || 1}
                    onChange={(e, page) => dispatch(changeOffset(page - 1))}
                    defaultPage={0}
                />
            </Grid2>
        </Grid2>
    );
}
