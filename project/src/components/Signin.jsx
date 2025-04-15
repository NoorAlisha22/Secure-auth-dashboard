import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Global.css'; 
import axios from 'axios';

const Signin = () => {
   const navigate = useNavigate(); 
   const [Username, setUsername] = useState(""); 
   const [Password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [Name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Semester, setSemester] = useState(""); 
  const [CGPA, setCGPA] = useState(""); const [error, setError] = useState("");

const handleSubmit = async (e) => { e.preventDefault(); if (Password !== confirmPassword) { setError("Passwords do not match"); return; }

const authHeader = `Basic ${btoa(`${Username}:${Password}`)}`;

try {
  const response = await axios.post(
    "http://127.0.0.1:8000/insert",
    { Username, Password, Name, Department, Semester, CGPA },
    {
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json"
      },
    }
  );

  if (response.data.status === "Success") {
    console.log("Navigating to login");
    navigate("/Login");
  } else {
    setError(response.data.message);
  }
} catch (err) {
  console.error(err);
  setError(err.response?.data?.detail || "An error occurred");
}

};

return (
   <div>
     <h1>SIGN-IN</h1> 
     <form onSubmit={handleSubmit}> 
      <label><b>NAME</b></label>
       <input type="text" placeholder='Enter your Name' required value={Name} onChange={(e) => setName(e.target.value)} /> <br />
       <label><b>DEPARTMENT</b></label>
        <input type="text" placeholder='Enter your Department' required value={Department} onChange={(e) => setDepartment(e.target.value)} /> <br />
         <label><b>SEMESTER</b></label>
          <input type="number" placeholder='Enter your Semester' required value={Semester} onChange={(e) => setSemester(e.target.value)} /> <br />
           <label><b>CGPA</b></label>
            <input type="number" step="0.01" placeholder='Enter your CGPA' required value={CGPA} onChange={(e) => setCGPA(e.target.value)} /> <br />
             <label><b>EMAIL OR USERNAME</b></label>
              <input type="text" placeholder='Enter your Mail' required value={Username} onChange={(e) => setUsername(e.target.value)} /> <br /> 
              <label><b>PASSWORD</b></label> 
              <input type="password" placeholder='Enter your Password' required value={Password} onChange={(e) => setPassword(e.target.value)} /> <br />
               <label><b>CONFIRM PASSWORD</b></label>
                <input type="password" placeholder='Confirm your Password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <br /><br /> {error && <p style={{ color: 'red' }}>{error}</p>} <button type="submit">SIGN-IN</button> <Link to='/Login'> <p>Already have an account? LOGIN</p> </Link> </form> </div> ); }

export default Signin;