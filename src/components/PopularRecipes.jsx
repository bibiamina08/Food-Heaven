import React from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { TfiTimer } from "react-icons/tfi";
import { GoPeople } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

export default function PopularRecipes() {
  const { recipes } = useFetchRecipes(9);

  return (
    <section className="pt-20 pb-10 container mx-auto px-2">
      <h2 className="text-4xl font-extrabold tracking-tight pb-10">
        Popular Recipes.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 shadow-lg">
        {recipes.map((recipe) => {
          return (
            <Link
              to={`/recipe/${recipe.id}`}
              className="bg-base-100 border border-base-200 rounded shadow-sm"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded p-2 shadow-lg"
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
      </div>
      <div className="flex items-center justify-center pt-10">
        <a href="#" className="btn btn-outline">
          View More
        </a>
      </div>
    </section>
  );
}