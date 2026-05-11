import React, { useState } from "react";

function RecipeDetail({ recipe, navigateTo, onLike }) {
  const [liked, setLiked] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState([]);

  if (!recipe) return null;

  const handleLike = () => {
    if (!liked) {
      onLike(recipe.id);
      setLiked(true);
    }
  };

  const toggleStep = (idx) => {
    setCheckedSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const progress = Math.round((checkedSteps.length / recipe.steps.length) * 100);

  return (
    <div className="detail-page">
      {/* Back button */}
      <div className="container">
        <button className="back-btn" onClick={() => navigateTo("home")}>
          ← Back to Recipes
        </button>
      </div>

      {/* Hero image */}
      <div className="detail-hero">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="detail-hero__img"
        />
        <div className="detail-hero__overlay" />
        <div className="detail-hero__content container">
          <div className="detail-hero__tags">
            {recipe.tags.map((t) => (
              <span key={t} className="tag tag--light">{t}</span>
            ))}
          </div>
          <h1 className="detail-hero__title">{recipe.title}</h1>
          <p className="detail-hero__author">
            by <strong>{recipe.author}</strong> · {recipe.category}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container detail-body">
        {/* Stats row */}
        <div className="detail-stats">
          <div className="stat">
            <span className="stat__icon">⏱</span>
            <span className="stat__val">{recipe.time}</span>
            <span className="stat__label">Total Time</span>
          </div>
          <div className="stat">
            <span className="stat__icon">👥</span>
            <span className="stat__val">{recipe.servings}</span>
            <span className="stat__label">Servings</span>
          </div>
          <div className="stat">
            <span className="stat__icon">📊</span>
            <span className="stat__val">{recipe.difficulty}</span>
            <span className="stat__label">Difficulty</span>
          </div>
          <div className="stat">
            <span className="stat__icon">♥</span>
            <span className="stat__val">{recipe.likes + (liked ? 1 : 0)}</span>
            <span className="stat__label">Likes</span>
          </div>
        </div>

        {/* Description */}
        <p className="detail-desc">{recipe.description}</p>

        {/* Two-column layout */}
        <div className="detail-columns">
          {/* Ingredients */}
          <aside className="detail-ingredients">
            <h2 className="detail-section-title">Ingredients</h2>
            <ul className="ingredient-list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="ingredient-item">
                  <span className="ingredient-dot" />
                  {ing}
                </li>
              ))}
            </ul>
          </aside>

          {/* Steps */}
          <div className="detail-steps">
            <div className="steps-header">
              <h2 className="detail-section-title">Method</h2>
              {/* Progress bar */}
              <div className="progress-wrap">
                <div className="progress-bar">
                  <div
                    className="progress-bar__fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="progress-label">{progress}% done</span>
              </div>
            </div>

            <ol className="step-list">
              {recipe.steps.map((step, i) => (
                <li
                  key={i}
                  className={`step-item ${checkedSteps.includes(i) ? "step-item--done" : ""}`}
                  onClick={() => toggleStep(i)}
                >
                  <span className="step-num">{i + 1}</span>
                  <p className="step-text">{step}</p>
                  <span className="step-check">
                    {checkedSteps.includes(i) ? "✓" : ""}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Like button */}
        <div className="detail-like-section">
          <button
            className={`like-btn ${liked ? "like-btn--liked" : ""}`}
            onClick={handleLike}
            disabled={liked}
          >
            {liked ? "♥ You loved this!" : "♡ Love this recipe"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
