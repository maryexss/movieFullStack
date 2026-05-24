import React, { useEffect, useState } from "react";
import {
    Button,
    Grid2,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { loadComments, addComment } from "../store/APIReducer";

export default function Comments({ movie_id }) {
    let dispatch = useDispatch();
    let comments = useSelector((state) => state.api.comments);
    useEffect(() => {
        dispatch(loadComments(movie_id));
    }, [movie_id]);

    let [author, setAuthor] = useState("");
    let [text, setText] = useState("");
    let handleSubmit = () => {
        if (author === "" || text === "") return;
        dispatch(addComment({ movie_id, text, author }));
        setAuthor("");
        setText("");
    };

    return (
        <Wrapper>
            <Paper sx={{ padding: "10px" }}>
                <Typography variant="h5">Comments</Typography>
                <List>
                    {comments.map((comment, index) => (
                        <ListItem key={index}>
                            <ListItemText>
                                <h4>{comment.author}</h4>
                                <p>{comment.text}</p>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
<FormWrapper>
    <Typography variant="h5">Add a comment</Typography>
    <TextField
        label="Name"
        fullWidth
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
    />
    <TextField
        label="Add a comment"
        fullWidth
        multiline
        value={text}
        onChange={(e) => setText(e.target.value)}
    />
    <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
    >
        Send
    </Button>
</FormWrapper>
            </Paper>
        </Wrapper>
    );
}

let Wrapper = styled(Grid2)`
    grid-column: 1/-1;
`;

let FormWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;
