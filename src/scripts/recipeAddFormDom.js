import createRecipeAddForm from "./recipeAddFormFactory.js";

const recipeForm = document.querySelector("#recipeForm");

const renderRecipeAddForm = () => {
    recipeForm.innerHTML = createRecipeAddForm();
}

export default renderRecipeAddForm;