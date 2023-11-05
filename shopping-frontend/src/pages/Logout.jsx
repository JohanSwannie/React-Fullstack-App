import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function Logout() {
  const { setUser } = useShoppingCart();
  const navigate = useNavigate();

  const logoutUser = () => {
    axios
      .get("/logout")
      .then(() => {
        toast.success("You have logged out successfully");
        localStorage.setItem("session", "login");
        localStorage.setItem("register", "notyet");
        localStorage.removeItem("currentUser");
        document.getElementById("register").style.display = "block";
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
        setUser(null);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const backToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="logout">
      <h2 className="subheader">Are you sure you want to log out</h2>
      <button
        id="logoutButton"
        onClick={() => {
          logoutUser();
        }}
      >
        Yes, please log me out
      </button>
      <button
        onClick={() => {
          backToDashboard();
        }}
      >
        No, I want to continue browsing
      </button>
    </div>
  );
}
