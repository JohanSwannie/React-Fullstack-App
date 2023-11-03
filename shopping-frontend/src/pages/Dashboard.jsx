import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get("/profile").then(({ data }) => {
      setUser(data);
      localStorage.setItem("currentUser", JSON.stringify(data));
    });
  }, []);

  return (
    <div className="dashboard">
      <h1 className="subheader">Dashboard</h1>
      {user && <h4>Hi {user.name} - Enjoy your Shopping</h4>}
    </div>
  );
}
