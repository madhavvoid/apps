import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipeDetail from "./RecipeDetail";
import AddRecipe from "./AddRecipe";
import "./App.css";

function App() {
  // Simple client-side "routing" without react-router for single-file portability
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Saffron Risotto",
      author: "Priya Sharma",
      category: "Italian",
      time: "45 min",
      servings: 4,
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
      description:
        "A luxuriously creamy Northern Italian risotto, perfumed with saffron and finished with aged Parmesan. Every spoonful is silk.",
      tags: ["Vegetarian", "Comfort Food", "Italian"],
      ingredients: [
        "300g Arborio rice",
        "1g saffron threads",
        "1.2L warm vegetable stock",
        "1 white onion, finely diced",
        "2 cloves garlic",
        "120ml dry white wine",
        "80g unsalted butter",
        "100g Parmesan, grated",
        "Salt & white pepper",
      ],
      steps: [
        "Bloom saffron in 3 tbsp warm stock for 10 minutes.",
        "Sauté onion and garlic in butter over medium heat until translucent.",
        "Add rice, toast for 2 minutes until edges are translucent.",
        "Deglaze with white wine; stir until absorbed.",
        "Add stock one ladle at a time, stirring constantly. Add saffron liquid midway.",
        "After 18–20 minutes, rice should be al dente. Remove from heat.",
        "Fold in remaining butter and Parmesan. Rest 2 minutes. Serve immediately.",
      ],
      likes: 214,
    },
    {
      id: 2,
      title: "Mango Chilli Salad",
      author: "Arjun Mehta",
      category: "Thai",
      time: "15 min",
      servings: 2,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
      description:
        "Bright, punchy, and impossibly fresh. Raw mango meets Thai bird's eye chilli, toasted peanuts and a zingy fish sauce dressing.",
      tags: ["Vegan", "Quick", "Thai"],
      ingredients: [
        "2 green mangoes, julienned",
        "2 bird's eye chillies, sliced",
        "1 shallot, thinly sliced",
        "Handful of fresh mint & coriander",
        "50g roasted peanuts, roughly crushed",
        "2 tbsp fish sauce (or soy for vegan)",
        "1.5 tbsp palm sugar",
        "Juice of 2 limes",
      ],
      steps: [
        "Whisk together fish sauce, palm sugar, and lime juice until sugar dissolves.",
        "Toss julienned mango, chillies, and shallots with the dressing.",
        "Let sit for 5 minutes to macerate.",
        "Fold in herbs and peanuts just before serving.",
      ],
      likes: 178,
    },
    {
      id: 3,
      title: "Dark Chocolate Tart",
      author: "Meera Nair",
      category: "Dessert",
      time: "2 hr",
      servings: 8,
      difficulty: "Hard",
      image: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=600&q=80",
      description:
        "A bittersweet ganache in a buttery shortcrust shell. Finished with flaked sea salt and a whisper of espresso.",
      tags: ["Dessert", "Chocolate", "French"],
      ingredients: [
        "200g all-purpose flour",
        "100g cold butter, cubed",
        "2 tbsp icing sugar",
        "1 egg yolk",
        "250ml heavy cream",
        "200g 72% dark chocolate, chopped",
        "2 tbsp unsalted butter",
        "1 shot espresso",
        "Flaked sea salt to finish",
      ],
      steps: [
        "Make shortcrust: rub butter into flour until breadcrumb texture. Add sugar, yolk, and 2 tbsp cold water. Press into 23cm tart tin.",
        "Blind bake at 180°C for 15 min, then 10 min without weights. Cool.",
        "Heat cream until just simmering. Pour over chopped chocolate.",
        "Stir until smooth. Mix in butter and espresso.",
        "Pour ganache into tart shell. Chill 1 hour until set.",
        "Finish with flaked sea salt before serving.",
      ],
      likes: 302,
    },
    {
      id: 4,
      title: "Lamb Rogan Josh",
      author: "Kabir Anand",
      category: "Indian",
      time: "1.5 hr",
      servings: 6,
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
      description:
        "Kashmir's most celebrated slow-braised lamb curry. Deep brick-red from Kashmiri chillies, fragrant with whole spices.",
      tags: ["Non-Veg", "Curry", "Indian"],
      ingredients: [
        "800g bone-in lamb pieces",
        "6 dried Kashmiri chillies",
        "250ml yoghurt, whisked",
        "2 bay leaves, 4 cardamoms, 1 cinnamon stick",
        "2 tsp fennel powder",
        "1 tsp ginger powder",
        "3 tbsp mustard oil",
        "Salt to taste",
      ],
      steps: [
        "Rehydrate Kashmiri chillies; blend into a smooth paste.",
        "Heat mustard oil to smoking point; add whole spices.",
        "Add chilli paste; fry until oil separates — about 8 minutes.",
        "Add lamb; brown on all sides over high heat.",
        "Lower heat; fold in whisked yoghurt gradually.",
        "Add fennel and ginger powder. Cover and braise 1 hour until tender.",
        "Adjust salt; garnish with dried mint. Serve with steamed rice.",
      ],
      likes: 261,
    },
    {
      id: 5,
      title: "Avocado Sourdough Toast",
      author: "Ananya Roy",
      category: "Breakfast",
      time: "10 min",
      servings: 2,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80",
      description:
        "Elevated avocado toast on thick-cut sourdough. Topped with pickled radish, dukkah, and a soft poached egg.",
      tags: ["Vegetarian", "Breakfast", "Quick"],
      ingredients: [
        "2 thick slices sourdough",
        "2 ripe avocados",
        "Juice of 1 lemon",
        "2 eggs (for poaching)",
        "4 radishes, thinly sliced",
        "1 tbsp white wine vinegar (for pickling)",
        "1 tbsp dukkah",
        "Chilli flakes, salt, extra-virgin olive oil",
      ],
      steps: [
        "Quick-pickle radishes in vinegar, a pinch of sugar, and salt for 10 min.",
        "Toast sourdough until deep golden.",
        "Mash avocado with lemon juice and salt.",
        "Poach eggs in simmering water with vinegar for 3 minutes.",
        "Spread avocado on toast, layer pickled radish, place egg on top.",
        "Finish with dukkah, chilli flakes, and a drizzle of olive oil.",
      ],
      likes: 143,
    },
    {
      id: 6,
      title: "Lemon Ricotta Pasta",
      author: "Priya Sharma",
      category: "Italian",
      time: "20 min",
      servings: 3,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
      description:
        "Spring on a plate. Silky ricotta sauce with bright lemon zest, torn basil, and peppery rocket tossed through al dente linguine.",
      tags: ["Vegetarian", "Pasta", "Quick"],
      ingredients: [
        "300g linguine",
        "250g fresh ricotta",
        "Zest and juice of 2 lemons",
        "Handful of fresh basil",
        "50g rocket",
        "50g Parmesan, grated",
        "3 tbsp extra-virgin olive oil",
        "Salt & cracked black pepper",
      ],
      steps: [
        "Cook linguine in heavily salted water until al dente.",
        "Whisk ricotta, lemon zest, juice, and olive oil until smooth.",
        "Reserve 100ml pasta water before draining.",
        "Toss pasta with ricotta sauce and pasta water until silky.",
        "Fold in basil, rocket, and Parmesan.",
        "Season generously. Serve immediately with extra lemon.",
      ],
      likes: 189,
    },
  ]);

  const navigateTo = (page, recipe = null) => {
    setCurrentPage(page);
    setSelectedRecipe(recipe);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prev) => [
      ...prev,
      { ...newRecipe, id: Date.now(), likes: 0 },
    ]);
    navigateTo("home");
  };

  const handleLike = (id) => {
    setRecipes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      <main className="main-content">
        {currentPage === "home" && (
          <Home
            recipes={recipes}
            navigateTo={navigateTo}
            onLike={handleLike}
          />
        )}
        {currentPage === "detail" && selectedRecipe && (
          <RecipeDetail
            recipe={recipes.find((r) => r.id === selectedRecipe.id)}
            navigateTo={navigateTo}
            onLike={handleLike}
          />
        )}
        {currentPage === "add" && (
          <AddRecipe navigateTo={navigateTo} onAdd={handleAddRecipe} />
        )}
      </main>
      <footer className="footer">
        <p>© 2026 Saffron & Salt · A Recipe Community</p>
      </footer>
    </div>
  );
}

export default App;
