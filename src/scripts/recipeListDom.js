import createRecipeCard from "./recipeCardFactory.js";

const recipeList = document.querySelector("#recipeList");

const renderRecipes = recipes => {
    // Clear the current content
    recipeList.textContent = ""

    // Fill container with recipe HTML representations
    for (const recipe of recipes) {
        const recipeCard = createRecipeCard(recipe)
        recipeList.innerHTML += recipeCard
    }
}

export default renderRecipes;