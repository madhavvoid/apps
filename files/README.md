# 🍃 Saffron & Salt — Recipe Sharing App

A warm, editorial-aesthetic recipe sharing web application built with React.

## File Structure

```
src/
├── App.jsx                    ← Root component, state, routing logic
├── App.css                    ← All styles (one file)
├── components/
│   ├── Navbar.jsx             ← Sticky header with scroll effect
│   └── RecipeCard.jsx         ← Card used in the grid (props demo)
└── pages/
    ├── Home.jsx               ← Hero + search/filter + recipe grid
    ├── RecipeDetail.jsx       ← Full recipe with step-checker + progress bar
    └── AddRecipe.jsx          ← Validated multi-field form
```

## Features

- 🔍 Live search + category filter
- ♥ Like recipes (per-session)
- ✅ Interactive step checker with progress bar
- ➕ Add your own recipe with form validation
- 📱 Fully responsive

## Setup

```bash
npx create-react-app saffron-and-salt
cd saffron-and-salt

# Copy all provided files into src/ (replacing defaults)
# Then:
npm start
```

## React Concepts Covered (CLO3 + CLO4 aligned)

| Concept | File |
|---|---|
| Components & Props | RecipeCard, TaskCard |
| State (useState, useMemo) | Home, AddRecipe, RecipeDetail |
| useEffect + lifecycle | Navbar (scroll), App |
| Lifting State Up | App.jsx → children |
| List Rendering + keys | Home.jsx |
| Conditional Rendering | Empty state, error messages |
| Event Handling | Likes, form, nav |
| Form validation | AddRecipe.jsx |
