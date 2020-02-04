const createRecipeAddForm = () => `
    <article id="recipeAddForm"> 
        <header class="recipe-form__title">
            Add Recipe
        </header>
        <div class="recipe-form__input">
          <input type="text" id="recipeTitle" placeholder="title" />
          <input type="text" id="recipeInstructions" placeholder="instructions" />
        </div>
        <div class="recipe-form__submit">
          <button id="addRecipe">Add</button>
        </div>
    </article>
  `;

export default createRecipeAddForm;