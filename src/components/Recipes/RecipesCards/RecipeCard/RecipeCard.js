import "./RecipeCard.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipeCard">
      <img className="image" src={image} alt="" />
      <h2>{title}</h2>
      <ol>
        <h3>Список ингридиентов:</h3>
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient.text}</li>;
        })}
      </ol>
      <p>Calories: {calories.toFixed()}</p>
    </div>
  );
}
