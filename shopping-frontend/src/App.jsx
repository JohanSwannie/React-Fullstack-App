import { Routes, Route } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Shopping from "./pages/Shopping";
import { ShoppingItems } from "./components/ShoppingItems";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8000";

axios.defaults.withCredentials = true;

function App() {
  return (
    <ShoppingCartProvider>
      <Navigation />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3500,
          style: {
            border: "5px solid #FFF",
            borderStyle: "double",
            padding: "16px",
            backgroundColor: "#303030",
            color: "#FFF",
          },
        }}
      />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/shoppingItems" element={<ShoppingItems />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
