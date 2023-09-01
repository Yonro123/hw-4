import RecipeCard from "./RecipeCard/RecipeCard";

import "./RecipesCards.css";

export default function RecipesCards({ recipes }) {
  return (
    <div className="recipesCards">
      {recipes.map((recipe, index) => {
        return (
          <RecipeCard
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        );
      })}
    </div>
  );
}
