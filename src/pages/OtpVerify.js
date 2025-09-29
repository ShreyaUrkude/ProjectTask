import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === "123456") {
      alert("OTP verified successfully!");
      navigate("/entername");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="otp-verify">
      <style>{`
        .otp-verify {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        
         
        }

        .otp-verify h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .otp-input {
          width: 280px;
          padding: 0.75rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .verify-button {
          padding: 0.75rem 1.5rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }

        .verify-button:hover {
          background-color: #218838;
        }
      `}</style>

      <h2>Enter OTP</h2>
      <input
        type="text"
        placeholder="Enter 6-digit OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="otp-input"
      />
      <button onClick={handleVerify} className="verify-button">
    Verify OTP
           </button>
    </div>
  );
};

export default OtpVerify;
