import useFetchRecipes from "../hooks/useFetchRecipes";
import RecipeCard from "../components/RecipeCard";
import { useState,useEffect } from "react";

export default function Recipes() {
  const { recipes } = useFetchRecipes();
  const [searchText, setSearchText] = useState("");
  const [fileteredRecipes, setFileteredRecipes] = useState([]);
  function handleSearch(event) {
    event.preventDefault();
    const result = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFileteredRecipes(result);
  }
  useEffect(() => {
    setFileteredRecipes(recipes);
  }, [recipes]);
  return (

  <div>
      
    <div className="pt-5 pb-10 container mx-auto px-2">
      <div className="flex justify-between items-center pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight max-w-[35rem]">
          All Recipes
        </h1>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            className="h-9 border border-black/30 md:h-10 md:w-[20rem] rounded-tl rounded-bl px-3 py-2"
            placeholder="Name of a dish"
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button className="btn h-10 rounded-br rounded-tr bg-[#FF5500] text-white rounded-none btn-sm">
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {fileteredRecipes.length === 0 && searchText ? (
          <span>nothing found</span>
        ) : null}
        {(fileteredRecipes.length ? fileteredRecipes : recipes).map(
          (recipe) => {
            return <RecipeCard key={recipe.name} recipe={recipe} />;
          }
        )}
      </div>
    </div>
    {fileteredRecipes.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fileteredRecipes.map((recipe) => {
            return <RecipeCard key={recipe.name} recipe={recipe} />;
          })}
        </div>
      ) : (
        <div className="min-h-96 text-center pt-10 text-2xl">
          <span>No Recipes Found</span>
        </div>
      )}
  </div>
  );
}