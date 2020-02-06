import apiActions from "./api.js"
import renderRecipes from "./recipeListDom.js"

const recipeList = document.querySelector("#recipeList")

const updateFormFields = recipeId => {

    // Get reference to input fields in the form
    const hiddenRecipeId = document.querySelector("#recipeId")
    const recipeTitleInput = document.querySelector("#recipeTitle")
    const recipeInstructionsInput = document.querySelector("#recipeInstructions")

    // TODO: Refactor - move fetch call to API module
    fetch(`http://localhost:8088/recipes/${recipeId}`)
        .then(response => response.json())
        .then(recipe => {
            /*
                Now that you KNOW you have the data, render
                an editing form that represents the current
                state of the resource.
            */
            hiddenRecipeId.value = recipe.id // Hidden value. User no see. 🙈
            recipeTitleInput.value = recipe.title
            recipeInstructionsInput.value = recipe.instructions
        })
}

export default {
    // TODO: refactor - rename to recipeEventListener
    recipeDeleteEventListener: () => {
        recipeList.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteRecipe--")) {
                const deleteBtnId = event.target.id;
                const deleteBtnArray = deleteBtnId.split("--");
                const recipeIdToDelete = deleteBtnArray[1];

                const recipeId = event.target.id.split("--")[1]

                apiActions.deleteRecipe(recipeIdToDelete)
                    .then(apiActions.getAllRecipes)
                    .then(renderRecipes);
            } else if (event.target.id.startsWith("editRecipe--")) {
                const recipeIdToEdit = event.target.id.split("--")[1]

                /*
                    This function will get the recipe from the API
                    and populate the form fields (see below)
                */
                updateFormFields(recipeIdToEdit)
            }
        })
    }
}