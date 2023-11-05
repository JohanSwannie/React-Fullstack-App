import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import music from "../music/music.mp3";

function Navigation() {
  const { openCart, cartQuantity } = useShoppingCart();

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

  const playMusic = () => {
    const musicPlay = document.getElementsByClassName("music")[0];
    musicPlay.play();
  };

  const cartImageStyle = {
    width: "1rem",
    height: "2rem",
    position: "relative",
    right: "12rem",
  };

  const cartQuantityStyle = {
    color: "white",
    fontSize: ".65rem",
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: "translate(55%, 30%)",
  };

  const h3Style = {
    marginLeft: "14rem",
    color: "#fff",
    fontSize: "2rem",
    textShadow: "2px 2px 2px #000",
  };

  return (
    <>
      <Navbar sticky="top" className="shadow-lg mb-1 navbar">
        <Container>
          <Nav className="me-auto gap-5" onClick={playMusic}>
            <Nav.Link to="/" as={NavLink} className="navlink">
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink} className="navlink">
              About
            </Nav.Link>
            <Nav.Link to="/contact" as={NavLink} className="navlink">
              Contact
            </Nav.Link>
            <Nav.Link
              to="/register"
              as={NavLink}
              className="navlink"
              id="register"
              style={registerStyle}
            >
              Register
            </Nav.Link>
            <Nav.Link
              to="/login"
              as={NavLink}
              className="navlink"
              id="login"
              style={loginStyle}
            >
              Login
            </Nav.Link>
            <Nav.Link
              to="/logout"
              as={NavLink}
              className="navlink"
              id="logout"
              style={logoutStyle}
            >
              Logout
            </Nav.Link>
            <Nav.Link to="/shopping" as={NavLink} className="navlink">
              Shopping
            </Nav.Link>
          </Nav>
          {cartQuantity > 0 && (
            <>
              <h3 style={h3Style}>Cart</h3>
              <Button
                onClick={openCart}
                style={cartImageStyle}
                variant="outline-warning"
                className="rounded-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={cartQuantityStyle}
                >
                  {cartQuantity}
                </div>
              </Button>
            </>
          )}
        </Container>
      </Navbar>
      <audio className="music">
        <source src={music}></source>
      </audio>
    </>
  );
}

export default Navigation;
