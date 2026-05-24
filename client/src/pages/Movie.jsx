import React, { useEffect } from "react";
import { useParams } from "react-router";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { styled } from "@mui/material/styles";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMovieInfo, likeMovie } from "../store/APIReducer";
import { useTranslation } from "react-i18next";
import Comments from "../components/Comments";

export default function Movie() {
    const { id } = useParams();
    let dispathch = useDispatch();
    useEffect(() => {
        dispathch(getMovieInfo(id));
    }, []);
    let {
        title,
        release_data,
        rating,
        poster_url,
        duration,
        description,
        likes,
    } = useSelector((state) => state.api.movie);
    let { t } = useTranslation()
    return (
        <Wrapper>
            <InfoBar>
                <img
                    src={"http://localhost:3000/posters/" + poster_url}
                    alt=""
                />
                <Typography variant="h6">
                   {t("movie.release_data")} {new Date(release_data).toLocaleDateString()}
                </Typography>
                <Typography variant="h6">IMDB: {rating}</Typography>
                <Typography variant="h6">Duration: {duration} min</Typography>
                <Typography variant="h6">
                    Likes: {likes}{" "}
                    <Button
                        variant="contained"
                        onClick={() => dispathch(likeMovie(id))}
                    >
                        Like
                    </Button>
                </Typography>
            </InfoBar>
            <PlayerWrapper>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h5">
                    {new Date(release_data).getFullYear() || ""}
                </Typography>
                <Plyr
                    source={{
                        type: "video",
                        sources: [
                            {
                                src: `http://localhost:3000/movies/` + id,
                            },
                        ],
                        // poster: "http://localhost:3000/posters/poster.jpg",
                    }}
                    options={{
                        controls: [
                            "play",
                            "progress",
                            "current-time",
                            "mute",
                            "volume",
                            "settings",
                            "fullscreen",
                        ],
                    }}
                />
            </PlayerWrapper>
            <OtherInfo>
                <Typography variant="h5">Description</Typography>
                <Typography variant="body1">{description}</Typography>
            </OtherInfo>
            <Comments movie_id={id}/>
        </Wrapper>
    );
}

let Wrapper = styled(Box)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0;
    gap: 1rem;
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

let InfoBar = styled(Paper)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

let PlayerWrapper = styled(Box)`
    grid-column: span 2;
    & > h4,
    & > h5 {
        color: ${({ theme }) => theme.palette.primary.contrastText};
    }
`;

let OtherInfo = styled(Paper)`
    padding: 1rem;
    grid-column: 1/-1;
`;
