import axios from "axios";

export default {
  // Gets recipes from the mealdb API, q should match the q in mealdbControllor.js
  getRecipes: function(q) {
    return axios.get("/api/recipes?search=" + q);
  },
  // Gets all saved recipes
  getSavedRecipes: function() {
    return axios.get("/api/recipes/saved");
  },
  // Deletes the saved recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves an recipe to the database
  saveRecipe: function(recipeData) {
    return axios.post("/api/recipes/", recipeData);
  }
};
