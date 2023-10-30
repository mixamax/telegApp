import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ItemsContainer from "./ItemsContainer";
import Cart from "./Cart";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const items = [
    { name: "nokia 1680", path: "/telegApp/img/nokia1680.jpg", price: 1000 },
    { name: "nokia 3310", path: "/telegApp/img/nokia3310.jpg", price: 1500 },
];

const tg = window.Telegram.WebApp;
// const items = [
//     { name: "nokia 1680", path: "/img/nokia1680.jpg", price: 1000 },
//     { name: "nokia 3310", path: "/img/nokia3310.jpg", price: 1500 },
// ];

export default function RoutesApp() {
    const [cartData, setCartData] = useState({});
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const addQuantity = () => {
        setQuantity((quantity) => quantity + 1);
        if (tg.MainButton.isVisible === false) {
            tg.MainButton.show();
            tg.MainButton.setText("в корзину");
            tg.MainButton.onClick(() => {
                navigate("/cart");
                tg.MainButton.hide();
            });
        }
    };
    console.log("Route", cartData);
    console.log("ПЕРЕРЕНДЕР");
    const addItemToCart = (name) => {
        setCartData((cartData) => ({
            ...cartData,
            [name]: {
                quantity:
                    (cartData[name]?.quantity === undefined
                        ? 0
                        : cartData[name].quantity) + 1,
                price: items.filter((item) => item.name === name)[0].price,
            },
        }));
    };
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route
                    path="/"
                    index
                    element={
                        <ItemsContainer
                            addItemToCart={addItemToCart}
                            addQuantity={addQuantity}
                            quantity={quantity}
                            items={items}
                        />
                    }
                />
                <Route
                    path="cart"
                    element={<Cart cartData={cartData} items={items} />}
                />
            </Route>
        </Routes>
    );
}
