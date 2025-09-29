import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <style>{`
        .about-page {
          padding: 2rem;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f9f9f9;
          text-align: center;
        }

        .about-page h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .about-page p {
          font-size: 1rem;
          color: #555;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-icons a {
          font-size: 1.8rem;
          color: #333;
          transition: color 0.3s ease;
        }

        .social-icons a:hover {
          color: #007bff;
        }
      `}</style>

      <h2>Shreya Urkude</h2>
      <p>
        Full Stack Developer with 6 Months of experience specializing in the MERN stack.
        Proficient in modern React (Hooks, Redux Toolkit), backend development with Node.js,
        and secure authentication using JWT. Experienced in both NoSQL and relational databases
        like MongoDB and PostgreSQL, with a strong focus on data modeling and API security.
        Skilled in building responsive UI/UX, optimizing performance, and delivering scalable
        end-to-end products. Contributed to apps with 100K+ downloads on the Play Store.
        HackWithInfy Finalist; passionate about creating impactful, user-centric solutions.
      </p>

      <div className="social-icons">
        <a href="https://github.com/ShreyaUrkude" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shreya-urkude-3bb9142a3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/shreyaurkude" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/shreyy_06" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
