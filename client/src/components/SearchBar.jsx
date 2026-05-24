import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies as fetchSearchResults } from "../store/APIReducer";
import { Link } from "react-router";

export default function SearchBar() {
    const dispatch = useDispatch();
    const { searchMovies } = useSelector((state) => state.api);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 1000);
        return () => clearTimeout(handler);
    }, [query]);
    useEffect(() => {
        if (debouncedQuery) {
            dispatch(fetchSearchResults({ title: debouncedQuery }));
        }
    }, [debouncedQuery]);

    return (
        <Autocomplete
            sx={{ minWidth: 300 }}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            isOptionEqualToValue={(option, value) =>
                option.title === value.title || ""
            }
            getOptionLabel={(option) => option.title}
            options={searchMovies}
            onInputChange={(e, v) => setQuery(v)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    placeholder="Search"
                />
            )}
            renderOption={(props, option) => (
                <Link
                    {...props}
                    key={option.id}
                    to={`/movie/${option.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    {option.title}
                </Link>
            )}
        />
    );
}
