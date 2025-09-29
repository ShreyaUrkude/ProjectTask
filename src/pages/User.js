import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    navigate("/start");
  };

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="user-page">
      <style>{`
        .user-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
         
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
        }

        .user-page h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .user-page p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .logout-button {
          padding: 0.75rem 1.5rem;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .logout-button:hover {
          background-color: #c82333;
        }
      `}</style>

      <h2>Welcome, {profile.username}</h2>
      <p><strong>About:</strong> {profile.about || "No info provided."}</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default User;
