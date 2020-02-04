import apiActions from "./api.js";
import events from "./events.js"
import renderRecipes from "./recipeListDom.js";
import renderRecipeAddForm from "./recipeAddFormDom.js";
import addRecipeAddEventListener from "./recipeAddEvents.js";

// Show the form
renderRecipeAddForm();
addRecipeAddEventListener();

events.recipeDeleteEventListener();
// Get all recipes from API and render them in the DOM
apiActions.getAllRecipes().then(renderRecipes);