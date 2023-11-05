import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Contact = () => {
  const { user } = useShoppingCart();
  return (
    <div className="contact">
      <h1 className="subheader">
        {user ? `Hi ${user.name} - Feel free to contact us` : "Contact"}
      </h1>
      <div>
        <p>Email: whitiangacoastalboats@yahoo.co.nz</p>
        <p>Telephone: +64 21 0334 4999</p>
      </div>
    </div>
  );
};

export default Contact;
