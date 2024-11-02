import React from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
import RecipeCard from "./RecipeCard";

export default function PopularRecipes() {
  const { recipes } = useFetchRecipes(9);

  return (
    <section className="pt-20 pb-10 container mx-auto px-2">
      <h2 className="text-4xl font-extrabold tracking-tight pb-10">
        Popular Recipes.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.name} recipe={recipe} />;
        })}
      </div>
      <div className="flex items-center justify-center pt-10">
        <a href="#" className="btn btn-outline">
          View More
        </a>
      </div>
    </section>
  );
}