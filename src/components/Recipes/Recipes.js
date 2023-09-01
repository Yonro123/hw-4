import { useState, useEffect } from "react";

import RecipeForm from "./RecipeForm/RecipesForm";
import fetchRecipesData from "../../lib/fetchRecipesData";
import RecipesCards from "./RecipesCards/RecipesCards";

import "./Recipes.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const recipesData = await fetchRecipesData(query);
    setRecipes(recipesData);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="container">
      <RecipeForm query={query} setQuery={setQuery} />
      <h1 className="recipesTitle">Список рецептов</h1>
      <RecipesCards recipes={recipes} />
    </div>
  );
}
