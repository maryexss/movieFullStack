import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "primary.main",
                boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.2)",
            }}
        >
            <Typography
                variant="body1"
                color="secondary.contrastText"
                align="center"
                sx={{ p: 1 }}
            >
                &copy;RoboMovies {new Date().getFullYear()}
            </Typography>
        </Box>
    );
}
