import { useState, useEffect } from "react";
import Explore from "./Explore";
import Itineraries from "./Itineraries";
import LoginSignup from "./LoginSignup";
import About from "./About";
import { initializePatternBackground } from "./utils/patternBackground";
import logo from "./assets/logo1.png";

import parisImg from "./assets/paris.jpg";
import londonImg from "./assets/london.jpg";
import newYorkImg from "./assets/newyork.jpg";
import tokyoImg from "./assets/tokyo.jpg";
import romeImg from "./assets/rome.jpg";
import dubaiImg from "./assets/dubai.jpg";
import baliImg from "./assets/bali.jpg";
import sydneyImg from "./assets/sydney.jpg";
import bangkokImg from "./assets/bangkok.jpg";

const itinerariesData = {
  Paris: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
  London: ["Big Ben", "London Eye", "Buckingham Palace"],
  NewYork: ["Statue of Liberty", "Times Square", "Central Park"],
  Tokyo: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple"],
  Rome: ["Colosseum", "Trevi Fountain", "Vatican City"],
  Dubai: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari"],
  Bali: ["Ubud Rice Terraces", "Tanah Lot Temple", "Kuta Beach"],
  Sydney: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"],
  Bangkok: ["Grand Palace", "Wat Arun", "Floating Markets"],
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");

  useEffect(() => {
    const cleanup = initializePatternBackground();
    return cleanup;
  }, [currentPage]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const handleSearch = () => {
    if (search.trim()) {
      if (itinerariesData[search]) {
        setSelectedDestination(search);
        setCurrentPage("itineraries");
      } else {
        setCurrentPage("explore");
      }
    }
  };

  const popularDestinations = [
    { name: "Paris", img: parisImg },
    { name: "London", img: londonImg },
    { name: "NewYork", img: newYorkImg },
    { name: "Tokyo", img: tokyoImg },
    { name: "Rome", img: romeImg },
    { name: "Dubai", img: dubaiImg },
    { name: "Bali", img: baliImg },
    { name: "Sydney", img: sydneyImg },
    { name: "Bangkok", img: bangkokImg }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "explore":
        return <Explore setCurrentPage={changePage} setSelectedDestination={setSelectedDestination} />;
      case "itineraries":
        return <Itineraries selectedDestination={selectedDestination} setCurrentPage={changePage} />;
      case "login":
        return <LoginSignup setCurrentPage={changePage} />;
      case "about":
        return <About setCurrentPage={changePage} />;
      default:
        return (
          <div className="home-container">
            <canvas id="bgCanvas" className="canvas-bg"></canvas>

            <header className="header">
              <div className="brand">
                <div className="logo-container">
                  <img src={logo} alt="ND" className="logo" />
                </div>
                <h1><b>NAVIGATE DREAMS</b></h1>
              </div>

              <button className="menu-button" onClick={toggleMenu}>☰</button>

              <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <ul className="nav-links">
                  <li><button onClick={() => changePage("home")}><b>HOME</b></button></li>
                  <li><button onClick={() => changePage("explore")}><b>EXPLORE</b></button></li>
                  <li><button onClick={() => changePage("login")}><b>LOGIN</b></button></li>
                  <li><button onClick={() => changePage("about")}><b>ABOUT</b></button></li>
                </ul>
              </nav>
            </header>

            <section className="hero">
              <h2>Plan Your Next Adventure</h2>
              <p>Discover top destinations, create itineraries, and make your trips memorable !!</p>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search places..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button onClick={handleSearch} className="search-button">Go</button>
              </div>

              <h2>Popular Destinations</h2>
              <div className="popular-places">
                {popularDestinations.map((place, index) => (
                  <div key={index} className="destination-card" onClick={() => {
                    setSelectedDestination(place.name);
                    setCurrentPage("itineraries");
                  }}>
                    <img src={place.img} alt={place.name} className="destination-image" />
                    <div className="destination-name">{place.name}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );  
    }
  };

  return <>{renderPage()}</>;
}

export default App;
