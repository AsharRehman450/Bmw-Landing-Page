import React, { useState } from 'react';
import "../Components/Login.css"
import logiin from "../assets/loginImg.jpg"
import { useNavigate } from "react-router-dom"


const login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            setIsLoggedIn(true);
            navigate("/landing");
        } else {
            alert("Invalid credentials!");
        }
    };
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="form-container">
                    <h2 className="heading">Login</h2>
                    <p className='para1'>Don't have an account ? <a href="#" onClick={() => navigate("/signup")}>Sign up here</a></p>
                    <br />
                    <form onSubmit={handleSubmit}>
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
                    <img src={logiin} alt="Signup" />
                </div>
            </div>
        </div>
    )
}

export default login;
