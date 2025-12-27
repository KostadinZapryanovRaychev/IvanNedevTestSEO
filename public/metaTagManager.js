// Meta Tag Manager for React Router Navigation
(function () {
  "use strict";

  // Meta tag configurations for each route
  const metaConfigs = {
    "/": {
      title: "Batman vs Superman - The Ultimate Superhero Comparison",
      description:
        "Compare DC's greatest champions - Batman and Superman. Explore their strengths, abilities, and characteristics in this ultimate superhero comparison.",
      ogTitle: "Batman vs Superman - The Ultimate Comparison",
      ogDescription:
        "Discover the differences between Batman and Superman - two legendary heroes with different approaches to justice.",
      ogImage: "/comparison.png",
      keywords:
        "batman, superman, superhero, comparison, DC comics, dark knight, man of steel",
    },
    "/batman": {
      title: "Batman - The Dark Knight",
      description:
        "Explore Batman's world - The Dark Knight of Gotham City with genius intellect, master detective skills, and advanced technology.",
      ogTitle: "Batman - The Dark Knight",
      ogDescription:
        "The Dark Knight of Gotham City - Master detective with genius intellect and advanced technology fighting crime in the shadows.",
      ogImage: "/batman.png",
      keywords:
        "batman, dark knight, gotham, bruce wayne, detective, superhero, DC comics",
    },
    "/superman": {
      title: "Superman - The Man of Steel",
      description:
        "Explore Superman's world - The Man of Steel with incredible powers including flight, super strength, heat vision, and invulnerability.",
      ogTitle: "Superman - The Man of Steel",
      ogDescription:
        "The Last Son of Krypton - Superman with incredible powers including flight, super strength, and invulnerability protecting Metropolis.",
      ogImage: "/superman.png",
      keywords:
        "superman, man of steel, krypton, clark kent, metropolis, superhero, DC comics",
    },
  };

  // Function to update meta tags based on current path
  function updateMetaTags(path) {
    const config = metaConfigs[path] || metaConfigs["/"];

    // Update document title
    document.title = config.title;

    // Update or create meta description
    updateOrCreateMeta("name", "description", config.description);

    // Update or create keywords
    updateOrCreateMeta("name", "keywords", config.keywords);

    // Update or create Open Graph tags
    updateOrCreateMeta("property", "og:title", config.ogTitle);
    updateOrCreateMeta("property", "og:description", config.ogDescription);
    updateOrCreateMeta("property", "og:image", config.ogImage);
    updateOrCreateMeta("property", "og:url", window.location.href);
    updateOrCreateMeta("property", "og:type", "website");

    // Update Twitter Card tags
    updateOrCreateMeta("name", "twitter:card", "summary_large_image");
    updateOrCreateMeta("name", "twitter:title", config.ogTitle);
    updateOrCreateMeta("name", "twitter:description", config.ogDescription);
    updateOrCreateMeta("name", "twitter:image", config.ogImage);

    console.log(`Meta tags updated for: ${path}`);
  }

  // Helper function to update or create meta tags
  function updateOrCreateMeta(attribute, value, content) {
    let meta = document.querySelector(`meta[${attribute}="${value}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attribute, value);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  // Function to get current React Router path
  function getCurrentPath() {
    return window.location.pathname;
  }

  // Initialize meta tags on page load
  function initializeMetaTags() {
    updateMetaTags(getCurrentPath());
  }

  // Listen for browser navigation (back/forward buttons)
  window.addEventListener("popstate", function (event) {
    setTimeout(() => {
      updateMetaTags(getCurrentPath());
    }, 100);
  });

  // Override History API methods to detect programmatic navigation
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function () {
    originalPushState.apply(history, arguments);
    setTimeout(() => {
      updateMetaTags(getCurrentPath());
    }, 100);
  };

  history.replaceState = function () {
    originalReplaceState.apply(history, arguments);
    setTimeout(() => {
      updateMetaTags(getCurrentPath());
    }, 100);
  };

  // Listen for custom navigation events (if needed)
  window.addEventListener("routechange", function (event) {
    updateMetaTags(event.detail.path || getCurrentPath());
  });

  // MutationObserver to detect URL changes in SPA
  let currentPath = getCurrentPath();
  const observer = new MutationObserver(function () {
    const newPath = getCurrentPath();
    if (newPath !== currentPath) {
      currentPath = newPath;
      updateMetaTags(currentPath);
    }
  });

  // Start observing when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initializeMetaTags();
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  } else {
    initializeMetaTags();
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // Export functions for manual triggering if needed
  window.metaTagManager = {
    updateMetaTags: updateMetaTags,
    getCurrentPath: getCurrentPath,
  };
})();
