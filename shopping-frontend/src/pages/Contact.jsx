import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="contact">
      <h1 className="subheader">
        {user ? `Hi ${user.name} - Feel free to contact us` : "Contact"}
      </h1>
      <div>
        <h4>Email: whitiangacoastalboats@yahoo.co.nz</h4>
        <h4>Telephone: +64 21 0334 4999</h4>
      </div>
    </div>
  );
};

export default Contact;
