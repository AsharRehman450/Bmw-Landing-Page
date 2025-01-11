import React, { useState } from 'react'
import Signup from './Components/Signup'
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LandingPage from "./Components/LandingPage"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/landing"
            element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/landing" /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;

