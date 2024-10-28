import toast from "react-hot-toast";
export default function useFavourite() {
  const existingRecipes =
    JSON.parse(localStorage.getItem("favouriteRecipes")) || [];
  function addToFavourites(recipe) {
    let recipes = [];
    const isRecipeExists = existingRecipes.some((existingRecipe) => {
      return existingRecipe.id === recipe.id;
    });
    if (isRecipeExists) {
      recipes = existingRecipes.filter((existingRecipe) => {
        return existingRecipe.id !== recipe.id;
      });
      toast.success("Recipe removed from favourites");
    } else {
      recipes = [...existingRecipes, recipe];
      toast.success("Recipe added to favourites");
    }
    localStorage.setItem("favouriteRecipes", JSON.stringify(recipes));
  }
  return { addToFavourites };
}