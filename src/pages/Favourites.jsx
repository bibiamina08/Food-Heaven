import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";


export default function Favourites() {
 const [favouriteRecipes , setFavouriteRecipes] =  useState(JSON.parse(localStorage.getItem("favouriteRecipes")) || []);
  
  return (
     <section className="container mx-auto px-2 pt-5 pb-10">
      <h1 className="text-4xl font-extrabold tracking-tight max-w-[35rem]">
        My Favourite Recipes.
      </h1>
     <div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favouriteRecipes.map((recipe) => {
            return <RecipeCard key={recipe.name} recipe={recipe} />;
          })}
        </div>
     </div>
      
    </section>
   
       
  );
}