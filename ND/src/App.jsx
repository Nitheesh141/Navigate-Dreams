import { useState, useEffect } from "react";
import Explore from "./Explore";
import LoginSignup from "./LoginSignup";
import About from "./About";
import { initializePatternBackground } from "./utils/patternBackground";
import logo from "./assets/logo1.png";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const renderPage = () => {
    switch (currentPage) {
      case "explore":
        return <Explore setCurrentPage={changePage} />;
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

             
              <button className="menu-button" onClick={toggleMenu}>
                ☰
              </button>

              
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
              <p>Discover top destinations, create itineraries, and make your trips memorable.</p>
              <button className="explore-button" onClick={() => changePage("explore")}>
                Explore Now
              </button>
            </section>
          </div>
        );
    }
  };

  return <>{renderPage()}</>;
}

export default App;
