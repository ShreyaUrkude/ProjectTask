import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import "./Home.css";

const PuzzleChallenge = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePayment = async () => {
    if (!isChecked) {
      alert('Please confirm the checkbox before proceeding.');
      return;
    }

    const email = localStorage.getItem("userEmail");
    if (!email) {
      alert("Email not found. Please sign in first.");
      navigate("/signin");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/payment/checkout", {
        email,
      });

      if (response.data.url) {
        window.location.href = response.data.url; // ✅ Redirect to Stripe Checkout
      } else {
        throw new Error("Stripe URL not received");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong. Redirecting...");
      navigate("/paymentfail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-content">
      <div className="card">
        <h1>Puzzle Challenge</h1>
        <p>Entries: 0</p>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          I confirm this is a skill-based contest. I am not using AI tools and will not use them during the contest. I understand that random checks may occur, and confirmed AI use may lead to disqualification and reversal of winnings.
        </label>
        <button onClick={handlePayment} disabled={!isChecked || loading}>
          {loading ? "Redirecting..." : "Pay $10 to Enter"}
        </button>
      </div>
    </main>
  );
};

export default PuzzleChallenge;
