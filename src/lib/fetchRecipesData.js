const API_ID = "49f01eff";
const API_KEY = "93df56bacf77a6de28883ddebed109b5";

export default async function fetchRecipesData(query) {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.log(error);
  }
}
