import React from "react";
import { Container, Button, Box } from "@mui/material";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

const ItemsContainer = ({ addItemToCart, items, addQuantity, quantity }) => {
    // const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    // const addQuantity = () => {
    //     setQuantity((quantity) => quantity + 1);
    // };
    console.log("ItemsContainer");
    return (
        <Container maxWidth="sm">
            <Button
                variant="contained"
                sx={{ margin: "3rem" }}
                onClick={() => navigate("/cart")}
            >
                {quantity}
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {" "}
                {items.map((item) => (
                    <Item
                        key={item.name}
                        name={item.name}
                        path={item.path}
                        addQuantity={addQuantity}
                        addItemToCart={addItemToCart}
                    ></Item>
                ))}
            </Box>
        </Container>
    );
};

export default ItemsContainer;
