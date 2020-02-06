import apiActions from "./api.js";
import renderRecipes from "./recipeListDom.js";

const clearForm = () => {
  const recipeIdInput = document.querySelector("#recipeId");
  const titleInput = document.querySelector("#recipeTitle");
  const instructionsInput = document.querySelector("#recipeInstructions");

  recipeIdInput.value = "";
  titleInput.value = "";
  instructionsInput.value = "";
}

const addRecipeSaveEventListener = () => {
  const saveButton = document.querySelector("#saveRecipe");

  saveButton.addEventListener("click", () => {
    const recipeIdInput = document.querySelector("#recipeId");
    const titleInput = document.querySelector("#recipeTitle");
    const instructionsInput = document.querySelector("#recipeInstructions");

    const recipe = {
      title: titleInput.value,
      instructions: instructionsInput.value
    };

    if (recipeIdInput.value !== "") {
      recipe.id = parseInt(recipeIdInput.value);
      apiActions.updateRecipe(recipe)
        .then(() => {
          apiActions.getAllRecipes()
            .then(renderRecipes)
            .then(clearForm);
        });
    } else {
      apiActions.addRecipe(recipe)
        .then(() => {
          apiActions.getAllRecipes()
            .then(renderRecipes)
            .then(clearForm);
        });
    }
  });
};

export default addRecipeSaveEventListener;