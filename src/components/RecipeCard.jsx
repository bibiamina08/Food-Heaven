import React, { useState } from "react";
import { TfiTimer } from "react-icons/tfi";
import { GoPeople } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
export default function RecipeCard(props) {
  const recipe = props.recipe;
  const [isRecipeExists, setIsRecipeExists] = useState(
    (JSON.parse(localStorage.getItem("favouriteRecipes")) || []).some(
      (existingRecipe) => existingRecipe.id === recipe.id
    )
  );
  function addToFavourites(recipe) {
    let recipes = [];
    const existingRecipes =
      JSON.parse(localStorage.getItem("favouriteRecipes")) || [];
    const isRecipeExists = existingRecipes.some((existingRecipe) => {
      return existingRecipe.id === recipe.id;
    });
    if (isRecipeExists) {
      recipes = existingRecipes.filter((existingRecipe) => {
        return existingRecipe.id !== recipe.id;
      });
      setIsRecipeExists(false);
      toast.success("Recipe removed from favourites");
    } else {
      recipes = [...existingRecipes, recipe];
      setIsRecipeExists(true);
      toast.success("Recipe added to favourites");
    }
    localStorage.setItem("favouriteRecipes", JSON.stringify(recipes));
  }
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="bg-base-100 border border-base-200 rounded shadow-sm relative"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="rounded-tl rounded-tr"
      />
      <div className="flex items-center gap-1 px-4 py-4">
      <FaStar className="text-orange-500 " />
      <FaStar className="text-orange-500 " />
      <FaStar className="text-orange-500 " /> 
      <FaStar className="text-orange-500 " />    
      <FaStar className="text-orange-500 " />
      </div>
      <div className=" ">
      
        <h4 className="text-xl font-bold pb-4">{recipe.name}</h4>
        <div className="space-y-2">
          <span className="flex items-center gap-x-2 font-medium">
            <TfiTimer /> Cook Time: {recipe.cookTimeMinutes}
          </span>
          <span className="flex items-center gap-x-2 font-medium">
            <GoPeople />
            Servings: {recipe.servings}
          </span>
          <span className="flex items-center gap-x-2 font-medium">
            <HiOutlineFlag />
            Cuisine: {recipe.cuisine}
          </span>
        </div>
      </div>
      <button
        className="btn btn-circle absolute top-0 right-0 m-4"
        onClick={(event) => {
          event.preventDefault();
          addToFavourites(recipe);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={isRecipeExists ? "" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </Link>
  );
}