import apiActions from "./api.js";
import events from "./events.js"
import renderRecipes from "./recipeListDom.js";
import addRecipeSaveEventListener from "./recipeSaveEvents.js";

addRecipeSaveEventListener();

events.recipeDeleteEventListener();
// Get all recipes from API and render them in the DOM
apiActions.getAllRecipes().then(renderRecipes);