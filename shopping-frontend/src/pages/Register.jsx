import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import musicnotes2 from "/musicnotes.jpg";

export default function Register() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (event) => {
    event.preventDefault();
    const { name, email, password } = inputData;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setInputData({});
        toast.success("You have registered successfully. Welcome aboard");
        localStorage.setItem("register", "already");
        document.getElementById("register").style.display = "none";
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <h1 className="header">Register</h1>
        <div className="container">
          <div className="image">
            <img src={musicnotes2} alt="music2" width="775" height="370" />
          </div>

          <div className="form-fields">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={inputData.name}
              onChange={(event) =>
                setInputData({ ...inputData, name: event.target.value })
              }
              placeholder="Enter your Name"
              autoFocus
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={inputData.email}
              onChange={(event) =>
                setInputData({ ...inputData, email: event.target.value })
              }
              placeholder="Enter your Email"
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
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
