import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailEntry = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Sending OTP to:", email);
    localStorage.setItem("userEmail", email);
    navigate("/otp");
  };

  return (
    <div className="email-entry">
      <style>{`
        .email-entry {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
         
         
        }

        .email-entry h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .email-input {
          width: 300px;
          padding: 0.75rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .send-otp-button {
          padding: 0.75rem 1.5rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }

        .send-otp-button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <h2>Enter Your Email</h2>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleSendOTP} className="send-otp-button">
        Send OTP
      </button>
    </div>
  );
};

export default EmailEntry;
