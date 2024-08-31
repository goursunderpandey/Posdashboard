import React, { useState } from "react";
import "../src/App.css"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {
  const [visible, setVisible] = useState(false);
  const [authType, setAuthType] = useState("signIn");

  const handleOnClick = (type) => {
    if (type !== authType) {
      setAuthType(type);
    }
  };

  const containerClass =
    "container " + (authType === "signUp" ? "right-panel-active" : "");

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={visible ? (<Navigate to="/login" />) : (<Navigate to="/dashboard" />)} />
          <Route path='/dashboard' element={<MainPage />} />
          <Route path='/login' element={
            <div className="App mt-5">
              <h2>  KrishnaPOS  Sign in/up Form</h2>
              <div className={containerClass} id="container">
                <Signup/>
                <Login />
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="overlay-panel overlay-left">
                      <h1>Welcome Back!</h1>
                      <p>To keep connected with us please login with your personal info</p>
                      <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                        Sign In
                      </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                      <h1>Hello, Friend!</h1>
                      <p>Enter your personal details and start journey with us</p>
                      <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
