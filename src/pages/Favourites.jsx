import React from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { Link } from "react-router-dom";
import { TfiTimer } from "react-icons/tfi";
import { GoPeople } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi2";


export default function Favourites() {
  const { recipes } = useFetchRecipes(9);
  
  return (

    <div>

    
       <section className="container mx-auto px-2 pt-5 pb-10">
      <h1 className="text-4xl font-extrabold tracking-tight max-w-[35rem]">
        My Favourite Recipes.
      </h1>
      {recipes.map((recipe) => {
          return (
            <Link
              to={`/recipe/${recipe.id}`}
              className="bg-base-100 border border-base-200 rounded shadow-sm"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded p-2"
              />
              <div className="px-4 py-3">
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
            </Link>
          );
          return <RecipeCard key={recipe.name} recipe={recipe} />;
        })}
      
    </section>
   
    </div>
   
  );
}