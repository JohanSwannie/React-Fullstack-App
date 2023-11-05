import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

import musicshop from "/musicshop.jpg";

export default function Home() {
  window.scrollTo(0, 0);
  const { user } = useShoppingCart();
  return (
    <div className="home">
      <h1 className="subheader">
        Hi {user ? `${user.name}` : ""} - Welcome to Swannies Music Shop
      </h1>
      <img id="img" src={musicshop} alt="boat" />
    </div>
  );
}
