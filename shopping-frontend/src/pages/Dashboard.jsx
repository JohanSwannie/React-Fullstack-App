import { useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import axios from "axios";

export default function Dashboard() {
  const { user, setUser } = useShoppingCart();

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
