import React, { useState, useEffect } from "react";

function Navbar({ currentPage, navigateTo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Brand */}
        <button className="navbar__brand" onClick={() => navigateTo("home")}>
          <span className="navbar__logo-icon">🍃</span>
          <span className="navbar__brand-text">
            Saffron<em>&amp;</em>Salt
          </span>
        </button>

        {/* Nav links */}
        <nav className="navbar__links">
          <button
            className={`navbar__link ${currentPage === "home" ? "navbar__link--active" : ""}`}
            onClick={() => navigateTo("home")}
          >
            Recipes
          </button>
          <button
            className={`navbar__link navbar__link--cta ${currentPage === "add" ? "navbar__link--active" : ""}`}
            onClick={() => navigateTo("add")}
          >
            + Share Recipe
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
