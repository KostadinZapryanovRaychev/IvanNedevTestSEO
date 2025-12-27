import React, { useEffect } from "react";
import "./SupermanPage.css";

const SupermanPage = () => {
  useEffect(() => {
    document.title = "Batman - The Dark Knight";
  }, []);
  useEffect(() => {
    const metaOgImage = document.getElementById("og:image");
    if (metaOgImage) {
      metaOgImage.setAttribute("content", "/superman.png");
    }
  }, []);
  return (
    <div className="superman-page">
      <div className="hero-section superman-hero">
        <h1 className="hero-title">SUPERMAN</h1>
        <p className="hero-subtitle">The Man of Steel</p>
      </div>

      <div className="content-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Real Identity</h3>
            <p>Clark Kent / Kal-El</p>
          </div>
          <div className="stat-card">
            <h3>Powers</h3>
            <p>
              Flight, Super strength, Invulnerability, Heat vision, X-ray vision
            </p>
          </div>
          <div className="stat-card">
            <h3>Origin</h3>
            <p>Krypton (Last Son of Krypton)</p>
          </div>
          <div className="stat-card">
            <h3>Base of Operations</h3>
            <p>Metropolis</p>
          </div>
        </div>

        <div className="abilities-section">
          <h2>Key Abilities</h2>
          <div className="abilities-list">
            <div className="ability-item">
              <h4>🧠 Intelligence</h4>
              <div className="progress-bar">
                <div
                  className="progress superman-progress"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <span>90%</span>
            </div>
            <div className="ability-item">
              <h4>💪 Strength</h4>
              <div className="progress-bar">
                <div
                  className="progress superman-progress"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span>100%</span>
            </div>
            <div className="ability-item">
              <h4>⚡ Speed</h4>
              <div className="progress-bar">
                <div
                  className="progress superman-progress"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span>100%</span>
            </div>
            <div className="ability-item">
              <h4>🛡️ Defense</h4>
              <div className="progress-bar">
                <div
                  className="progress superman-progress"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <span>95%</span>
            </div>
            <div className="ability-item">
              <h4>✈️ Flight</h4>
              <div className="progress-bar">
                <div
                  className="progress superman-progress"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span>100%</span>
            </div>
          </div>
        </div>

        <div className="quote-section">
          <blockquote>
            "There is a right and a wrong in the universe, and that distinction
            is not hard to make."
          </blockquote>
          <cite>- Superman</cite>
        </div>
      </div>
    </div>
  );
};

export default SupermanPage;
