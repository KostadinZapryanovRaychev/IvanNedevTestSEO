import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove any existing og:image tags
    const existingOgImages = document.querySelectorAll(
      'meta[property="og:image"]'
    );
    existingOgImages.forEach((tag) => tag.remove());

    // Create new og:image tag
    const ogImageTag = document.createElement("meta");
    ogImageTag.setAttribute("property", "og:image");
    ogImageTag.setAttribute(
      "content",
      `${window.location.origin}/superman.png`
    );
    document.head.appendChild(ogImageTag);

    // Cleanup function
    return () => {
      const ogImages = document.querySelectorAll('meta[property="og:image"]');
      ogImages.forEach((tag) => tag.remove());
    };
  }, []);

  const navigateToBatman = () => {
    navigate("/batman");
  };

  const navigateToSuperman = () => {
    navigate("/superman");
  };

  return (
    <>
      <Helmet>
        <title>Batman vs Superman - Ultimate Superhero Comparison</title>
        <meta
          key="description"
          name="description"
          content="Compare Batman and Superman - Two legendary DC heroes with different approaches. Explore their strengths, abilities, and characteristics."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Batman vs Superman - Ultimate Superhero Comparison"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Two legendary heroes, two different approaches. Explore the strengths, abilities, and characteristics of DC's greatest champions."
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={window.location.href} />
      </Helmet>

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
    </>
  );
};

export default HomePage;
