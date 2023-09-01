import { useState, useEffect } from "react";

import RecipeForm from "./components/Recipe/RecipeForm/RecipeForm";
import Recipe from "./Recipes";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  const API_ID = "49f01eff";
  const API_KEY = "93df56bacf77a6de28883ddebed109b5";

  const URL = `https://api.edamam.com/`;

  const fetchRecipe = async () => {
    try {
      const response = await fetch(
        `${URL}search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [query]);

  return (
    <div className="container">
      <RecipeForm query={query} setQuery={setQuery} />
      <div className="recipes">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}
