import apiActions from "./api.js"
import renderRecipes from "./recipeListDom.js"

const recipeList = document.querySelector("#recipeList")

export default {
    recipeDeleteEventListener: () => {
        recipeList.addEventListener("click", (event) => {
            if(event.target.id.startsWith("deleteRecipe--")){
                const deleteBtnId = event.target.id;
                const deleteBtnArray = deleteBtnId.split("--");
                const recipeIdToDelete = deleteBtnArray[1];

                const recipeId = event.target.id.split("--")[1]
                
                apiActions.deleteRecipe(recipeIdToDelete)
                .then(apiActions.getAllRecipes)
                .then(renderRecipes);
            }
        })
    }
}