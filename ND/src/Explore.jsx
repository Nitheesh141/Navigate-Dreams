import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";
import logo from "./assets/logo1.png";
import defaultUser from "./assets/defaultuser.png";
import userProfile from "./assets/react.svg"; 
import maldives from "./assets/maldives.jpg";
import santorini from "./assets/santorini.jpg";
import venice from "./assets/venice.jpg";
import zurich from "./assets/zurich.jpg";
import kyoto from "./assets/kyoto.jpg";
import prague from "./assets/prague.jpg";
import istanbul from "./assets/istanbul.jpg";
import seychelles from "./assets/seychelles.jpg";
import losangeles from "./assets/losangeles.jpg";
import paris from "./assets/paris.jpg";
import london from "./assets/london.jpg";
import newyork from "./assets/newyork.jpg";
import tokyo from "./assets/tokyo.jpg";
import rome from "./assets/rome.jpg";
import dubai from "./assets/dubai.jpg";
import bali from "./assets/bali.jpg";
import sydney from "./assets/sydney.jpg";
import bangkok from "./assets/bangkok.jpg";

const allDestinations = [
  { name: "Maldives", image: maldives },
  { name: "Santorini", image: santorini },
  { name: "Venice", image: venice },
  { name: "Zurich", image: zurich },
  { name: "Kyoto", image: kyoto },
  { name: "Prague", image: prague },
  { name: "Istanbul", image: istanbul },
  { name: "Seychelles", image: seychelles },
  { name: "Los Angeles", image: losangeles },
  { name: "Paris", image: paris },
  { name: "London", image: london },
  { name: "New York", image: newyork },
  { name: "Tokyo", image: tokyo },
  { name: "Rome", image: rome },
  { name: "Dubai", image: dubai },
  { name: "Bali", image: bali },
  { name: "Sydney", image: sydney },
  { name: "Bangkok", image: bangkok },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const formattedQuery = searchQuery.trim().toLowerCase();
      const foundDestination = allDestinations.find(
        (destination) => destination.name.toLowerCase() === formattedQuery
      );

      if (foundDestination) {
        navigate(`/itineraries/${foundDestination.name}`);
      } else {
        alert("Please enter a valid destination.");
      }
    }
  };

  return (
    <div className="explore-container">
      {/* Navigation Bar */}
      <header className="header">
        <div className="brand">
          <div className="logo-container" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="ND" className="logo" />
          </div>
        </div>
        
        {/* User Profile / Login Button */}
        <div className="user-profile" onClick={() => navigate("/login")}>
          <img src={isLoggedIn ? userProfile : defaultUser} alt="User" className="user-icon" />
        </div>
      </header>

      {/* Explore Content */}
      <h1>Explore Destinations</h1>
      <p>Search and discover amazing places.</p>

      {/* Search Box */}
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

      {/* Suggested Destinations */}
      <h2>Suggested Destinations</h2>
      <div className="suggested-list">
        {allDestinations.map((destination, index) => (
          <div
            key={index}
            className="suggested-card"
            onClick={() => navigate(`/itineraries/${destination.name}`)}
          >
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="destination-name-overlay">
              <p className="destination-name">{destination.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
