import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
    import Rules from "./pages/Rules";
import User from "./pages/User";
import About from "./pages/About";
import EmailEntry from "./pages/EmailEntry";       
import OtpVerify from "./pages/OtpVerify";         
import EnterName from "./pages/EnterName";         

    
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="nav-links">
          
          
          <Link to="/start" className="nav-item">Start</Link>
          <Link to="/rules" className="nav-item">Rules</Link>
          <Link to="/user" className="nav-item">User</Link>
          <Link to="/about" className="nav-item">About</Link>
        
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="" element={<EmailEntry />} />
          <Route path="/otp" element={<OtpVerify />} />
          <Route path="/entername" element={<EnterName />} />
          <Route path="/user" element={<User />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
        
         
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© 2025 Shreyaurkude | Follow us on Socials</p>
      </footer>
    </div>
  );
}

export default App;
