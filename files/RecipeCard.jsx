import React from "react";

const difficultyColor = {
  Easy: "tag--green",
  Medium: "tag--amber",
  Hard: "tag--red",
};

function RecipeCard({ recipe, navigateTo, onLike }) {
  return (
    <article
      className="recipe-card"
      onClick={() => navigateTo("detail", recipe)}
    >
      {/* Image */}
      <div className="recipe-card__img-wrap">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card__img"
          loading="lazy"
        />
        <span className={`recipe-card__difficulty tag ${difficultyColor[recipe.difficulty]}`}>
          {recipe.difficulty}
        </span>
      </div>

      {/* Body */}
      <div className="recipe-card__body">
        <div className="recipe-card__meta">
          <span className="recipe-card__category">{recipe.category}</span>
          <span className="recipe-card__time">⏱ {recipe.time}</span>
        </div>

        <h2 className="recipe-card__title">{recipe.title}</h2>
        <p className="recipe-card__desc">{recipe.description}</p>

        {/* Tags */}
        <div className="recipe-card__tags">
          {recipe.tags.slice(0, 2).map((t) => (
            <span key={t} className="tag tag--subtle">{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="recipe-card__footer">
          <span className="recipe-card__author">by {recipe.author}</span>
          <button
            className="recipe-card__like"
            onClick={(e) => {
              e.stopPropagation();
              onLike(recipe.id);
            }}
            aria-label="Like recipe"
          >
            ♥ {recipe.likes}
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
