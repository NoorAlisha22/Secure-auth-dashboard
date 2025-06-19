import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Global.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      const response = await axios.post(
        "http://127.0.0.1:8000/Validate",null
        // {
        //   Username: username, 
        //   Password: password,
        // },
        {
          auth: {
            username: username, 
            password: password, 
          },
        }
      );
  
      if (response.data.status === "Success") {
        const userResponse = await axios.get("http://127.0.0.1:8000/AuthTable");
        navigate("/UserInfo", { state: userResponse.data });
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
  }
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ textAlign: "left" }}>
          <b>EMAIL</b>
        </label>
        <input
          type="text"
          placeholder="Enter your Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>
          <b>PASSWORD</b>
        </label>
        <input
          type="password"
          placeholder="Enter your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">LOGIN</button>
        <Link to="/Signin">
          <p>If you don't have an account, SIGN IN</p>
        </Link>
        <Link to="/FrgtPass">
          <h6>Forgot Password</h6>
        </Link>
      </form>
    </div>
  );
};

export default Login;


