import apiActions from "./api.js";
import renderRecipes from "./recipeListDom.js";

const addRecipeAddEventListener = () => {
  const addButton = document.querySelector("#addRecipe");

  addButton.addEventListener("click", () => {
    const titleInput = document.querySelector("#recipeTitle");
    const instructionsInput = document.querySelector("#recipeInstructions");

    const recipe = {
      title: titleInput.value,
      instructions: instructionsInput.value
    };

    apiActions.addRecipe(recipe)
      .then(() => {
        apiActions.getAllRecipes().then(renderRecipes);
      });
  });
};

export default addRecipeAddEventListener;