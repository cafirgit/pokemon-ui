import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PokemonCard = ({ name, image }) => {
    return (
        <Card sx={{ maxWidth: 250, m: 2 }}>
            <CardMedia component="img" height="140" image={image} alt={name} />
            <CardContent>
                <Typography variant="h6" component="div">
                    {name.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
