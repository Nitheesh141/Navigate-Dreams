import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>Learn more about Navigate Dreams.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default About;
