const baseUrl = "http://localhost:8088"

export default {
    getAllRecipes() {
        return fetch(`${baseUrl}/recipes`)
            .then(response => response.json());
    },
    addRecipe(recipe) {
        return fetch(`${baseUrl}/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        });
    },
    deleteRecipe(recipeId){
        return fetch(`${baseUrl}/recipes/${recipeId}`, {
            method: "DELETE"
        });
    }
}