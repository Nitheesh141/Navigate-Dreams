import React, { useState } from "react";

const itinerariesData = {
    paris: {
        locations: [
          { name: "Eiffel Tower", travelTime: "30m", transportCost: 10, stayCost: 80 },
          { name: "Louvre Museum", travelTime: "40m", transportCost: 12, stayCost: 85 },
          { name: "Notre-Dame Cathedral", travelTime: "35m", transportCost: 14, stayCost: 90 },
        ],
        packages: [
          { name: "Standard", cost: 150, details: "Includes metro pass and mid-range stay." },
          { name: "Premium", cost: 300, details: "Includes private guide and luxury stay." },
        ],
      },
      london: {
        locations: [
          { name: "Big Ben", travelTime: "20m", transportCost: 8, stayCost: 70 },
          { name: "London Eye", travelTime: "25m", transportCost: 10, stayCost: 75 },
          { name: "Buckingham Palace", travelTime: "30m", transportCost: 15, stayCost: 85 },
        ],
        packages: [
          { name: "Budget", cost: 120, details: "Includes local transport and economy stay." },
          { name: "Luxury", cost: 280, details: "Includes private car and 5-star stay." },
        ],
      },
      newyork: {
        locations: [
          { name: "Statue of Liberty", travelTime: "45m", transportCost: 20, stayCost: 100 },
          { name: "Times Square", travelTime: "30m", transportCost: 15, stayCost: 90 },
          { name: "Central Park", travelTime: "35m", transportCost: 10, stayCost: 85 },
        ],
        packages: [
          { name: "Explorer", cost: 200, details: "Includes subway pass and budget stay." },
          { name: "VIP", cost: 400, details: "Includes private tour and premium stay." },
        ],
      },
      tokyo: {
        locations: [
          { name: "Shibuya Crossing", travelTime: "20m", transportCost: 10, stayCost: 75 },
          { name: "Senso-ji Temple", travelTime: "30m", transportCost: 12, stayCost: 85 },
          { name: "Tokyo Tower", travelTime: "25m", transportCost: 15, stayCost: 90 },
        ],
        packages: [
          { name: "Backpacker", cost: 130, details: "Includes local train pass and hostel stay." },
          { name: "Deluxe", cost: 300, details: "Includes guided tours and luxury hotel." },
        ],
      },
      rome: {
        locations: [
          { name: "Colosseum", travelTime: "35m", transportCost: 18, stayCost: 85 },
          { name: "Vatican City", travelTime: "40m", transportCost: 20, stayCost: 90 },
          { name: "Trevi Fountain", travelTime: "25m", transportCost: 15, stayCost: 80 },
        ],
        packages: [
          { name: "Historical", cost: 170, details: "Includes skip-the-line passes and local stays." },
          { name: "Luxury", cost: 350, details: "Includes private tours and 5-star stays." },
        ],
      },
      dubai: {
        locations: [
          { name: "Burj Khalifa", travelTime: "30m", transportCost: 25, stayCost: 120 },
          { name: "Desert Safari", travelTime: "50m", transportCost: 30, stayCost: 100 },
          { name: "Palm Jumeirah", travelTime: "35m", transportCost: 20, stayCost: 110 },
        ],
        packages: [
          { name: "Standard", cost: 250, details: "Includes city transport and mid-range stay." },
          { name: "Exclusive", cost: 500, details: "Includes luxury stay and VIP experiences." },
        ],
      },
      bali: {
        locations: [
          { name: "Ubud Monkey Forest", travelTime: "40m", transportCost: 10, stayCost: 70 },
          { name: "Tanah Lot", travelTime: "50m", transportCost: 12, stayCost: 75 },
          { name: "Uluwatu Temple", travelTime: "35m", transportCost: 15, stayCost: 80 },
        ],
        packages: [
          { name: "Nature", cost: 140, details: "Includes eco-friendly lodges and local transport." },
          { name: "Luxury", cost: 280, details: "Includes private villas and guided tours." },
        ],
      },
      sydney: {
        locations: [
          { name: "Sydney Opera House", travelTime: "30m", transportCost: 15, stayCost: 85 },
          { name: "Bondi Beach", travelTime: "40m", transportCost: 12, stayCost: 80 },
          { name: "Harbour Bridge", travelTime: "35m", transportCost: 10, stayCost: 75 },
        ],
        packages: [
          { name: "Adventure", cost: 180, details: "Includes local tours and economy stays." },
          { name: "Luxury", cost: 350, details: "Includes harbor cruise and luxury stays." },
        ],
      },
      bangkok: {
        locations: [
          { name: "Grand Palace", travelTime: "30m", transportCost: 10, stayCost: 60 },
          { name: "Floating Market", travelTime: "45m", transportCost: 12, stayCost: 70 },
          { name: "Wat Arun", travelTime: "35m", transportCost: 8, stayCost: 65 },
        ],
        packages: [
          { name: "Cultural", cost: 120, details: "Includes temple visits and budget stay." },
          { name: "Premium", cost: 250, details: "Includes guided experiences and premium stay." },
        ],
      },
      singapore: {
        locations: [
          { name: "Marina Bay Sands", travelTime: "30m", transportCost: 15, stayCost: 100 },
          { name: "Sentosa Island", travelTime: "50m", transportCost: 20, stayCost: 90 },
          { name: "Gardens by the Bay", travelTime: "40m", transportCost: 18, stayCost: 85 },
        ],
        packages: [
          { name: "City Explorer", cost: 200, details: "Includes public transport and city passes." },
          { name: "Luxury", cost: 400, details: "Includes private tours and 5-star stay." },
        ],
      },
      barcelona: {
        locations: [
          { name: "Sagrada Familia", travelTime: "35m", transportCost: 12, stayCost: 85 },
          { name: "Park Güell", travelTime: "40m", transportCost: 14, stayCost: 90 },
          { name: "La Rambla", travelTime: "25m", transportCost: 10, stayCost: 80 },
        ],
        packages: [
          { name: "Culture", cost: 160, details: "Includes museum entries and local stays." },
          { name: "VIP", cost: 320, details: "Includes guided tours and luxury stays." },
        ],
      },
      amsterdam: {
        locations: [
          { name: "Anne Frank House", travelTime: "30m", transportCost: 10, stayCost: 70 },
          { name: "Van Gogh Museum", travelTime: "40m", transportCost: 12, stayCost: 75 },
          { name: "Canal Cruise", travelTime: "35m", transportCost: 15, stayCost: 80 },
        ],
        packages: [
          { name: "Standard", cost: 140, details: "Includes city pass and budget stays." },
          { name: "Luxury", cost: 300, details: "Includes private tours and high-end stays." },
        ],
      },
    };

const Itineraries = ({ selectedDestination, setCurrentPage }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const destinationKey = selectedDestination.toLowerCase();
  const itinerary = itinerariesData[destinationKey];

  if (!itinerary) {
    return (
      <div className="itineraries-container">
        <p className="error-message">
          Sorry, no details available for "{selectedDestination}".<br />
          Please try a valid location.
        </p>
        <div className="navigation-buttons">
          <button className="nav-button" onClick={() => setCurrentPage("explore")}>🔍 Back to Explore</button>
          <button className="nav-button" onClick={() => setCurrentPage("home")}>🏠 Back to Home</button>
        </div>
      </div>
    );
  }

  const handleLocationSelect = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const calculateItinerary = () => {
    let cost = selectedLocations.reduce((sum, loc) => {
      const place = itinerary.locations.find((l) => l.name === loc);
      return sum + (place ? place.transportCost + place.stayCost : 0);
    }, 0);

    if (selectedPackage) cost += selectedPackage.cost;

    let time = selectedLocations.reduce((sum, loc) => {
      const place = itinerary.locations.find((l) => l.name === loc);
      return sum + (place ? parseInt(place.travelTime) : 0);
    }, 0);

    setTotalCost(cost);
    setTotalTime(time);
  };

  return (
    <div className="itineraries-container">
      <h1 className="itinerary-title">{selectedDestination} Itinerary</h1>

      <h2>Select Locations:</h2>
      <ul className="itinerary-list">
        {itinerary.locations.map((loc) => (
          <li
            key={loc.name}
            className={`itinerary-item ${selectedLocations.includes(loc.name) ? "selected" : ""}`}
            onClick={() => handleLocationSelect(loc.name)}
          >
            <input
              type="checkbox"
              checked={selectedLocations.includes(loc.name)}
              readOnly
            />
            {loc.name} - {loc.travelTime} travel
          </li>
        ))}
      </ul>

      <h2>Select a Package:</h2>
      <ul className="itinerary-list">
        {itinerary.packages.map((pkg) => (
          <li
            key={pkg.name}
            className={`itinerary-item ${selectedPackage === pkg ? "selected" : ""}`}
            onClick={() => handlePackageSelect(pkg)}
          >
            <input
              type="radio"
              name="package"
              checked={selectedPackage === pkg}
              readOnly
            />
            {pkg.name} - ${pkg.cost} ({pkg.details})
          </li>
        ))}
      </ul>

      <button className="nav-button" onClick={calculateItinerary}>Calculate Itinerary</button>

      {totalCost > 0 && (
        <div className="itinerary-summary">
          <h3>Total Cost: ${totalCost}</h3>
          <h3>Estimated Travel Time: {totalTime} hrs</h3>
        </div>
      )}

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => setCurrentPage("explore")}>🔍 Back to Explore</button>
        <button className="nav-button" onClick={() => setCurrentPage("home")}>🏠 Back to Home</button>
      </div>
    </div>
  );
};

export default Itineraries;
