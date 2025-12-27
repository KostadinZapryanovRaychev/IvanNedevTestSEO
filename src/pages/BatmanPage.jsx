import React from "react";
import { Helmet } from "react-helmet-async";
import "./BatmanPage.css";

const BatmanPage = () => {
  return (
    <>
      <Helmet>
        <title>Batman - The Dark Knight</title>
        <meta
          name="description"
          content="Explore Batman's world - The Dark Knight of Gotham City with genius intellect and advanced technology. Master detective with peak human condition."
        />
        <meta property="og:title" content="Batman - The Dark Knight" />
        <meta
          property="og:description"
          content="The Dark Knight of Gotham City - Master detective with genius intellect and advanced technology."
        />
        <meta property="og:image" content="/batman.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <div className="batman-page">
        <div className="hero-section batman-hero">
          <h1 className="hero-title">BATMAN</h1>
          <p className="hero-subtitle">The Dark Knight</p>
        </div>

        <div className="content-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Real Identity</h3>
              <p>Bruce Wayne</p>
            </div>
            <div className="stat-card">
              <h3>Powers</h3>
              <p>
                Genius-level intellect, Master detective, Peak physical
                condition
              </p>
            </div>
            <div className="stat-card">
              <h3>Equipment</h3>
              <p>Batsuit, Batarangs, Batmobile, Advanced Technology</p>
            </div>
            <div className="stat-card">
              <h3>Base of Operations</h3>
              <p>Gotham City</p>
            </div>
          </div>

          <div className="abilities-section">
            <h2>Key Abilities</h2>
            <div className="abilities-list">
              <div className="ability-item">
                <h4>🧠 Intelligence</h4>
                <div className="progress-bar">
                  <div
                    className="progress batman-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <span>95%</span>
              </div>
              <div className="ability-item">
                <h4>💪 Strength</h4>
                <div className="progress-bar">
                  <div
                    className="progress batman-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span>85%</span>
              </div>
              <div className="ability-item">
                <h4>⚡ Speed</h4>
                <div className="progress-bar">
                  <div
                    className="progress batman-progress"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span>80%</span>
              </div>
              <div className="ability-item">
                <h4>🛡️ Defense</h4>
                <div className="progress-bar">
                  <div
                    className="progress batman-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span>90%</span>
              </div>
              <div className="ability-item">
                <h4>💰 Wealth</h4>
                <div className="progress-bar">
                  <div
                    className="progress batman-progress"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <span>100%</span>
              </div>
            </div>
          </div>

          <div className="quote-section">
            <blockquote>
              "I'm not going to kill you, but I don't have to save you."
            </blockquote>
            <cite>- Batman</cite>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatmanPage;
