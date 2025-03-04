import { useState } from "react";
import Explore from "./Explore";
import LoginSignup from "./LoginSignup";
import About from "./About";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "explore":
        return <Explore />;
      case "login":
        return <LoginSignup setCurrentPage={setCurrentPage} />; // Pass setCurrentPage
      case "about":
        return <About />;
      default:
        return (
          <div className="home-container">
            <header className="header">
              <h1><b>WELCOME TO NAVIGATE DREAMS</b></h1>
              <nav>
                <ul className="nav-links">
                  <li><button onClick={() => setCurrentPage("home")}><b>HOME</b></button></li>
                  <li><button onClick={() => setCurrentPage("explore")}><b>EXPLORE</b></button></li>
                  <li><button onClick={() => setCurrentPage("login")}><b>LOGIN / SIGNUP</b></button></li>
                  <li><button onClick={() => setCurrentPage("about")}><b>ABOUT</b></button></li>
                </ul>
              </nav>
            </header>

            <section className="hero">
              <h2>Plan Your Next Adventure</h2>
              <p>Discover top destinations, create itineraries, and make your trips memorable.</p>
              <button className="explore-button" onClick={() => setCurrentPage("explore")}>
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
