import React, { useState, useMemo } from "react";
import RecipeCard from "./RecipeCard";

const CATEGORIES = ["All", "Italian", "Thai", "Indian", "Dessert", "Breakfast"];

function Home({ recipes, navigateTo, onLike }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchesSearch =
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.author.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || r.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [recipes, search, activeCategory]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__texture" />
        <div className="hero__content">
          <p className="hero__eyebrow">A Community Kitchen</p>
          <h1 className="hero__title">
            Cook. Share.
            <br />
            <em>Inspire.</em>
          </h1>
          <p className="hero__sub">
            Discover hand-crafted recipes from passionate cooks around the world.
          </p>
          <button className="btn btn--primary" onClick={() => navigateTo("add")}>
            Share Your Recipe →
          </button>
        </div>

        {/* Floating food emoji decorations */}
        <div className="hero__floats" aria-hidden="true">
          <span style={{ "--delay": "0s", "--x": "15%", "--y": "20%" }}>🍋</span>
          <span style={{ "--delay": "1.2s", "--x": "80%", "--y": "15%" }}>🌿</span>
          <span style={{ "--delay": "0.6s", "--x": "70%", "--y": "65%" }}>🫙</span>
          <span style={{ "--delay": "1.8s", "--x": "10%", "--y": "70%" }}>🍅</span>
          <span style={{ "--delay": "0.9s", "--x": "50%", "--y": "10%" }}>✨</span>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="filters-section">
        <div className="container">
          {/* Search */}
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search recipes, authors, cuisines…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch("")}>
                ✕
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="category-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`pill ${activeCategory === cat ? "pill--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recipe Grid ── */}
      <section className="grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {activeCategory === "All" ? "All Recipes" : activeCategory}
            </h2>
            <span className="section-count">{filtered.length} recipes</span>
          </div>

          {filtered.length > 0 ? (
            <div className="recipe-grid">
              {filtered.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  navigateTo={navigateTo}
                  onLike={onLike}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-state__icon">🍽️</span>
              <h3>No recipes found</h3>
              <p>Try a different search or category, or be the first to share one!</p>
              <button className="btn btn--primary" onClick={() => navigateTo("add")}>
                Add Recipe
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
