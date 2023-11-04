import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import musicshop from "/musicshop.jpg";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <div className="home">
      <h1 className="subheader">
        Hi {user ? `${user.name}` : ""} - Welcome to Swannies Music Shop
      </h1>
      <div className="image_container">
        <img id="img" src={musicshop} alt="boat" />
      </div>
    </div>
  );
}
