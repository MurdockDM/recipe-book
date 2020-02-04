export default {
    getAllRecipes() {
        return fetch("http://localhost:8088/recipes")
            .then(response => response.json());
    },
    addRecipe(recipe) {
        return fetch("http://localhost:8088/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        });
    }
}