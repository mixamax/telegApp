import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";

function Item({ name, path, addQuantity }) {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={path}
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        telefon telefon
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button
                variant="contained"
                sx={{ margin: "1rem" }}
                onClick={addQuantity}
            >
                в корзину
            </Button>
        </Card>
    );
}

export default Item;
