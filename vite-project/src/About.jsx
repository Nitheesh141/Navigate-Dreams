import React from "react";

const About = ({ setCurrentPage }) => {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>Learn more about Navigate Dreams.</p>
      <button onClick={() => setCurrentPage("home")}>Back to Home</button>
    </div>
  );
};

export default About;
