import React from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { Link } from "react-router-dom";
import { TfiTimer } from "react-icons/tfi";
import { GoPeople } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi2";
import RecipeCard from "../components/RecipeCard";


export default function Favourites() {
  const { recipes } = useFetchRecipes(9);
  
  return (

    <div>

    
       <section className="container mx-auto px-2 pt-5 pb-10">
      <h1 className="text-4xl font-extrabold tracking-tight max-w-[35rem]">
        My Favourite Recipes.
      </h1>
     
      
    </section>
   
    </div>
   
  );
}