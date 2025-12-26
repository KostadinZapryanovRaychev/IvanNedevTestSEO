import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
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
          <Link to="/batman" className="hero-card batman-card">
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
          </Link>

          <div className="vs-divider">
            <div className="vs-circle">VS</div>
          </div>

          <Link to="/superman" className="hero-card superman-card">
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
          </Link>
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
