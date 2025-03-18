import React, { useState } from "react";
import "./Dest.css"; 
const suggestedDestinations = [
  "Paris", "London", "New York", "Tokyo", "Rome", "Dubai",
  "Bali", "Sydney", "Bangkok", "Singapore", "Barcelona", "Amsterdam"
];

const Explore = ({ setCurrentPage, setSelectedDestination }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const formattedQuery = searchQuery.trim().toLowerCase();
      const foundDestination = suggestedDestinations.find(
        (destination) => destination.toLowerCase() === formattedQuery
      );

      if (foundDestination) {
        setSelectedDestination(foundDestination);
        setCurrentPage("itineraries");
      } else {
        alert("Please enter a valid destination.");
      }
    }
  };

  return (
    <div className="explore-container">
      <h1>Explore Destinations</h1>
      <p>Search and discover amazing places.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search places..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch} className="search-button">Go</button>
      </div>

      <h2>Suggested Destinations</h2>
      <div className="suggested-list">
        {suggestedDestinations.map((destination, index) => (
          <button
            key={index}
            className="suggested-item"
            onClick={() => {
              setSelectedDestination(destination);
              setCurrentPage("itineraries");
            }}
          >
            {destination}
          </button>
        ))}
      </div>

      <div className="navigation-buttons">
        <button onClick={() => setCurrentPage("home")} className="home-button">
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Explore;
