import React, { useState } from "react";

const CATEGORIES = ["Italian", "Thai", "Indian", "Dessert", "Breakfast", "Mexican", "Japanese", "Other"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

function AddRecipe({ navigateTo, onAdd }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Italian",
    difficulty: "Easy",
    time: "",
    servings: "",
    description: "",
    image: "",
    tags: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Recipe name is required.";
    if (!form.author.trim()) e.author = "Author name is required.";
    if (!form.time.trim()) e.time = "Cooking time is required.";
    if (!form.servings || isNaN(form.servings)) e.servings = "Enter a valid number.";
    if (!form.description.trim()) e.description = "Description is required.";
    if (!form.ingredients.trim()) e.ingredients = "Add at least one ingredient.";
    if (!form.steps.trim()) e.steps = "Add at least one step.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      ...form,
      servings: parseInt(form.servings),
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      ingredients: form.ingredients.split("\n").map((i) => i.trim()).filter(Boolean),
      steps: form.steps.split("\n").map((s) => s.trim()).filter(Boolean),
      image:
        form.image.trim() ||
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&q=80",
    };

    setSubmitted(true);
    setTimeout(() => {
      onAdd(newRecipe);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="success-screen">
        <div className="success-card">
          <span className="success-icon">🎉</span>
          <h2>Recipe Shared!</h2>
          <p>Your recipe is now live in the community kitchen.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="add-page">
      <div className="container add-container">
        <div className="add-header">
          <button className="back-btn" onClick={() => navigateTo("home")}>
            ← Back
          </button>
          <h1 className="add-title">Share a Recipe</h1>
          <p className="add-sub">
            Inspire the community with something you love to cook.
          </p>
        </div>

        <form className="recipe-form" onSubmit={handleSubmit} noValidate>
          {/* Basic Info */}
          <fieldset className="form-fieldset">
            <legend className="form-legend">Basic Info</legend>

            <div className="form-row form-row--2">
              <div className="form-group">
                <label className="form-label">Recipe Name *</label>
                <input
                  className={`form-input ${errors.title ? "form-input--error" : ""}`}
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Smoky Aubergine Dip"
                />
                {errors.title && <span className="form-error">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  className={`form-input ${errors.author ? "form-input--error" : ""}`}
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                />
                {errors.author && <span className="form-error">{errors.author}</span>}
              </div>
            </div>

            <div className="form-row form-row--3">
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-select" name="category" value={form.category} onChange={handleChange}>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Difficulty</label>
                <select className="form-select" name="difficulty" value={form.difficulty} onChange={handleChange}>
                  {DIFFICULTIES.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Cook Time *</label>
                <input
                  className={`form-input ${errors.time ? "form-input--error" : ""}`}
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  placeholder="e.g. 30 min"
                />
                {errors.time && <span className="form-error">{errors.time}</span>}
              </div>
            </div>

            <div className="form-row form-row--2">
              <div className="form-group">
                <label className="form-label">Servings *</label>
                <input
                  className={`form-input ${errors.servings ? "form-input--error" : ""}`}
                  name="servings"
                  type="number"
                  min="1"
                  value={form.servings}
                  onChange={handleChange}
                  placeholder="e.g. 4"
                />
                {errors.servings && <span className="form-error">{errors.servings}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Tags (comma-separated)</label>
                <input
                  className="form-input"
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="e.g. Vegan, Quick, Summer"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Image URL (optional)</label>
              <input
                className="form-input"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://... (leave blank for default)"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Short Description *</label>
              <textarea
                className={`form-textarea ${errors.description ? "form-input--error" : ""}`}
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                placeholder="A one-paragraph description to entice readers…"
              />
              {errors.description && <span className="form-error">{errors.description}</span>}
            </div>
          </fieldset>

          {/* Ingredients */}
          <fieldset className="form-fieldset">
            <legend className="form-legend">Ingredients</legend>
            <div className="form-group">
              <label className="form-label">One ingredient per line *</label>
              <textarea
                className={`form-textarea form-textarea--tall ${errors.ingredients ? "form-input--error" : ""}`}
                name="ingredients"
                value={form.ingredients}
                onChange={handleChange}
                rows={6}
                placeholder={"300g Arborio rice\n1L vegetable stock\n80g Parmesan, grated"}
              />
              {errors.ingredients && <span className="form-error">{errors.ingredients}</span>}
            </div>
          </fieldset>

          {/* Steps */}
          <fieldset className="form-fieldset">
            <legend className="form-legend">Method</legend>
            <div className="form-group">
              <label className="form-label">One step per line *</label>
              <textarea
                className={`form-textarea form-textarea--tall ${errors.steps ? "form-input--error" : ""}`}
                name="steps"
                value={form.steps}
                onChange={handleChange}
                rows={8}
                placeholder={"Heat olive oil in a pan.\nAdd onions and cook until soft.\nStir in rice…"}
              />
              {errors.steps && <span className="form-error">{errors.steps}</span>}
            </div>
          </fieldset>

          {/* Actions */}
          <div className="form-actions">
            <button type="button" className="btn btn--ghost" onClick={() => navigateTo("home")}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary">
              Publish Recipe →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
