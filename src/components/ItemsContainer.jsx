import React, { useState } from "react";
import { Container, Button, Box } from "@mui/material";
import Item from "./Item";

const items = [
    { name: "nokia 1680", path: "/img/nokia1680.jpg" },
    { name: "nokia 3310", path: "/img/nokia3310.jpg" },
];

const ItemsContainer = () => {
    const [quantity, setQuantity] = useState(0);
    const addQuantity = () => {
        setQuantity((quantity) => quantity + 1);
    };

    return (
        <Container>
            <Button variant="contained" sx={{ margin: "3rem" }}>
                {quantity}
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {" "}
                {items.map((item) => (
                    <Item
                        name={item.name}
                        path={item.path}
                        addQuantity={addQuantity}
                    ></Item>
                ))}
            </Box>
        </Container>
    );
};

export default ItemsContainer;
