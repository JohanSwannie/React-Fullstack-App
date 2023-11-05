import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import musicnotes from "/musicnotes.jpg";

export default function Login() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (event) => {
    event.preventDefault();
    const { email, password } = inputData;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("session", "logout");
        localStorage.setItem("register", "already");
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        document.getElementById("register").style.display = "none";
        setInputData({});
        toast.success("You have signed in successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={loginUser}>
      <h1 className="header">Login</h1>
      <div className="contain">
        <div className="image">
          <img src={musicnotes} alt="music" width="775" height="370" />
        </div>
        <div className="form-fields">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={inputData.email}
            onChange={(event) =>
              setInputData({ ...inputData, email: event.target.value })
            }
            placeholder="Enter your Email"
            autoFocus
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inputData.password}
            onChange={(event) =>
              setInputData({ ...inputData, password: event.target.value })
            }
            placeholder="Enter your Password"
          />
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
