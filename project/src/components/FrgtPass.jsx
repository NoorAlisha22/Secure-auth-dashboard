import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Global.css';

const FrgtPass = () => {
  const [email, SetEmail] = useState("");
  const [newpassword, SetNewpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (newpassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/reset-password", {
        Username:email,
        Password: newpassword,
      }, {
        auth: {
          username: email,
          password: newpassword, // or some other password if needed for auth
        }
      }
    );
    console.log(response.data); 
      if (response.data.status === "Success") {
        setMessage("Password reset successful");
        setTimeout(() => navigate("/Login"), 1500);
      } else {
        setError(response.data.message );
      }
    } catch (err) {
      setError(err.response?.data?.detail || "An error occurred");
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleReset}>
        <label><b>EMAIL</b></label>
        <input
          type="text"
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          required
        /><br /><br />

        <input
          type="password"
          placeholder='Enter your New Password'
          value={newpassword}
          onChange={(e) => SetNewpassword(e.target.value)}
          required
        /><br /><br />

        <input
          type="password"
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br /><br />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}

        <button type="submit">Reset Password</button>


        <Link to="/Login">
          <h6>Back to Login</h6>
        </Link>
      </form>
    </div>
  );
};

export default FrgtPass