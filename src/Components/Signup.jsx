import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../Components/Signup.css"

const Signup = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name) {
      setIsLoggedIn(true);
      navigate("/landing");
    } else {
      alert("Please fill out all fields!");
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="form-container">
          <h2 className="heading">Sign Up</h2>
          <p className='para1'>Already have an account ? <a href="#" onClick={() => navigate("/login")}>Login here</a></p>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name here" value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email id</label>
              <input type="email" id="email" placeholder="Enter your email id here" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password here" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='para'>
              <p><input type="checkbox" />By signing up you agree to reacive updates and offers </p>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="image-container">
          <img src="/src/assets/signUp.img" alt="Signup" />
        </div>
      </div>
    </div>
  )
}

export default Signup;
