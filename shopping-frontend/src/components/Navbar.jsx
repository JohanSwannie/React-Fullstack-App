import { Link } from "react-router-dom";

export default function Navbar() {
  const session = localStorage.getItem("session");
  const register = localStorage.getItem("register");

  const loginStyle = {
    display:
      session === "login" ? "block" : session === "logout" ? "none" : "block",
  };

  const logoutStyle = {
    display: session === "logout" ? "block" : "none",
  };

  const registerStyle = {
    display: register === "already" ? "none" : "block",
  };

  return (
    <nav>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About us
      </Link>
      <Link to="/contact" className="link">
        Contact us
      </Link>
      <Link to="/register" className="link" id="register" style={registerStyle}>
        Register
      </Link>
      <Link to="/login" className="link" id="login" style={loginStyle}>
        Login
      </Link>
      <Link to="/logout" className="link" id="logout" style={logoutStyle}>
        Logout
      </Link>
      <Link to="/shopping" className="link">
        Shopping
      </Link>
    </nav>
  );
}
