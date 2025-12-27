import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToBatman = () => {
    // Update meta tags before navigation
    document.title = "Batman - The Dark Knight";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Explore Batman's world - The Dark Knight of Gotham City with genius intellect and advanced technology.";

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "Batman - The Dark Knight";

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.content =
      "The Dark Knight of Gotham City - Master detective with genius intellect and advanced technology.";

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.content = "/batman.jpg";

    // Navigate to Batman page
    navigate("/batman");
  };

  const navigateToSuperman = () => {
    // Update meta tags before navigation
    document.title = "Superman - The Man of Steel";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Explore Superman's world - The Man of Steel with incredible powers including flight, super strength, and heat vision.";

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "Superman - The Man of Steel";

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.content =
      "The Last Son of Krypton - Superman with incredible powers including flight, super strength, and invulnerability.";

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.content = "/superman.png";

    // Navigate to Superman page
    navigate("/superman");
  };
  return (
    <div className="home-page">
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="main-title">BATMAN vs SUPERMAN</h1>
          <p className="main-subtitle">The Ultimate Superhero Comparison</p>
          <p className="description">
            Two legendary heroes, two different approaches. Explore the
            strengths, abilities, and characteristics of DC's greatest
            champions.
          </p>
        </div>
      </div>

      <div className="comparison-section">
        <div className="hero-cards">
          <div
            onClick={navigateToBatman}
            className="hero-card batman-card"
            style={{ cursor: "pointer" }}
          >
            <div className="card-content">
              <div className="hero-icon">🦇</div>
              <h2>BATMAN</h2>
              <p>The Dark Knight</p>
              <ul className="hero-highlights">
                <li>Genius-level intellect</li>
                <li>Master detective</li>
                <li>Advanced technology</li>
                <li>Peak human condition</li>
              </ul>
              <div className="card-footer">
                <span>Enter Gotham →</span>
              </div>
            </div>
          </div>

          <div className="vs-divider">
            <div className="vs-circle">VS</div>
          </div>

          <div
            onClick={navigateToSuperman}
            className="hero-card superman-card"
            style={{ cursor: "pointer" }}
          >
            <div className="card-content">
              <div className="hero-icon">🚀</div>
              <h2>SUPERMAN</h2>
              <p>The Man of Steel</p>
              <ul className="hero-highlights">
                <li>Super strength</li>
                <li>Flight capability</li>
                <li>Invulnerability</li>
                <li>Heat vision</li>
              </ul>
              <div className="card-footer">
                <span>Enter Metropolis →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-stats">
        <h2>Quick Comparison</h2>
        <div className="stats-comparison">
          <div className="stat-row">
            <span className="stat-label">Intelligence</span>
            <div className="stat-bars">
              <div className="stat-bar batman-stat">
                <span>Batman</span>
                <div className="bar">
                  <div className="fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="stat-bar superman-stat">
                <span>Superman</span>
                <div className="bar">
                  <div className="fill" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-row">
            <span className="stat-label">Strength</span>
            <div className="stat-bars">
              <div className="stat-bar batman-stat">
                <span>Batman</span>
                <div className="bar">
                  <div className="fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="stat-bar superman-stat">
                <span>Superman</span>
                <div className="bar">
                  <div className="fill" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-row">
            <span className="stat-label">Technology</span>
            <div className="stat-bars">
              <div className="stat-bar batman-stat">
                <span>Batman</span>
                <div className="bar">
                  <div className="fill" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="stat-bar superman-stat">
                <span>Superman</span>
                <div className="bar">
                  <div className="fill" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
