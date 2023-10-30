import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const tg = window.Telegram.WebApp;

export default function Cart({ cartData, items }) {
    const navigate = useNavigate();
    if (tg.MainButton.isVisible === false) {
        tg.MainButton.show();
        tg.MainButton.setText("заказать");
        tg.MainButton.onClick(() => {
            navigate("/");
        });
    }
    // console.log("Cart", cartData);

    if (Object.keys(cartData).length === 0) return <div>Корзина пуста</div>;
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {Object.keys(cartData).map((name) => (
                <Card sx={{ maxWidth: 250, marginTop: "1rem" }} key={name}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={
                                items.filter((item) => item.name === name)[0]
                                    .path
                            }
                            alt="green iguana"
                            sx={{ objectFit: "contain" }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {`цена: ${cartData[name].price} кол-во: ${
                                    cartData[name].quantity
                                } стоимость: ${
                                    cartData[name].quantity *
                                    cartData[name].price
                                }`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Container>
    );
}
