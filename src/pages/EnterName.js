import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterName = () => {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }

    localStorage.setItem("userProfile", JSON.stringify({ username, about }));
    navigate("/home");
  };

  return (
    <div className="enter-name">
      <style>{`
        .enter-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        
         
          
        }

        .enter-name h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

.input-field,
        .textarea-field {
           width: 300px;
          padding: 0.75rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .textarea-field {
          height: 100px;
          resize: none;
        }

        .continue-button {
          padding: 0.75rem 1.5rem;
          background-color: darkblue;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }

        .continue-button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <h2>Set Up Your Profile</h2>
      <input
        type="text"
        placeholder="Enter Your Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <textarea
        placeholder="About"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        className="textarea-field"
      />
      <button onClick={handleContinue} className="continue-button">
        Continue
      </button>
    </div>
  );
};

export default EnterName;
