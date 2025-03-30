import React, { useState } from "react";
import "./Dest.css"; 
import maldives from "./assets/maldives.jpg";
import santorini from "./assets/santorini.jpg";
import venice from "./assets/venice.jpg";
import zurich from "./assets/zurich.jpg";
import kyoto from "./assets/kyoto.jpg";
import prague from "./assets/prague.jpg";
import istanbul from "./assets/istanbul.jpg";
import seychelles from "./assets/seychelles.jpg";
import losangeles from "./assets/losangeles.jpg";

const suggestedDestinations = [
  { name: "Maldives", image: maldives },
  { name: "Santorini", image: santorini },
  { name: "Venice", image: venice },
  { name: "Zurich", image: zurich },
  { name: "Kyoto", image: kyoto },
  { name: "Prague", image: prague },
  { name: "Istanbul", image: istanbul },
  { name: "Seychelles", image: seychelles },
  { name: "Los Angeles", image: losangeles },
];

const Explore = ({ setCurrentPage, setSelectedDestination }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const formattedQuery = searchQuery.trim().toLowerCase();
      const foundDestination = suggestedDestinations.find(
        (destination) => destination.name.toLowerCase() === formattedQuery
      );

      if (foundDestination) {
        setSelectedDestination(foundDestination.name);
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
          <div
            key={index}
            className="suggested-card"
            onClick={() => {
              setSelectedDestination(destination.name);
              setCurrentPage("itineraries");
            }}
          >
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="destination-name-overlay">
              <p className="destination-name">{destination.name}</p>
            </div>
          </div>
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
