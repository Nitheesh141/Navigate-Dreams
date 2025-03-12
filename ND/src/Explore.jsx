import React from "react";

const Explore = ({ setCurrentPage }) => {
  return (
    <div className="page-container">
      <h1>Explore Destinations</h1>
      <p>Discover amazing places.</p>
      <button onClick={() => setCurrentPage("home")}>Back to Home</button>
    </div>
  );
};

export default Explore;