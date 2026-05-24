import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    styled,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeLimit,
    changeSort,
    changeSortType,
    resetState,
} from "../store/APIReducer";

export default function SortBar() {
    let dispatch = useDispatch();
    let { sort, sortType, limit } = useSelector((state) => state.api);
    return (
        <Wrapper>
            <FormControl variant="outlined" sx={{ flexGrow: 1 }}>
                <InputLabel>Sort</InputLabel>
                <Select
                    label="Sort"
                    defaultValue="id"
                    onChange={(e) => dispatch(changeSort(e.target.value))}
                    value={sort}
                >
                    <MenuItem value="title">Title</MenuItem>
                    <MenuItem value="release_date">Release Date</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                    <MenuItem value="id">Adding Date</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ flexGrow: 1 }}>
                <InputLabel>Sort Order</InputLabel>
                <Select
                    label="Sort Order"
                    defaultValue="ASC"
                    onChange={(e) => dispatch(changeSortType(e.target.value))}
                    value={sortType}
                >
                    <MenuItem value="ASC">↑</MenuItem>
                    <MenuItem value="DESC">↓</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ flexGrow: 1 }}>
                <InputLabel>Count</InputLabel>
                <Select
                    label="Count"
                    defaultValue="12"
                    onChange={(e) => dispatch(changeLimit(e.target.value))}
                    value={limit}
                >
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                    <MenuItem value="24">24</MenuItem>
                    <MenuItem value="48">48</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={() => dispatch(resetState())}>
                Reset
            </Button>
        </Wrapper>
    );
}

let Wrapper = styled(Paper)`
    padding: ${(props) => props.theme.spacing(1)};
    font-family: ${(props) => props.theme.typography.fontFamily};
    display: flex;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing(1)};
`;
