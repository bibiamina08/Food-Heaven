import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineCheckCircle } from "react-icons/md";

export default function Recipe() {
  const params = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchTopRecipes() {
      const response = await fetch(
        `https://dummyjson.com/recipes/${params.id}`
      );
      const data = await response.json();

      if (data) {
        setRecipe(data);
      }
    }

    fetchTopRecipes();
  }, []);

  return (
    <div className="pb-20">
      <section className="container mx-auto px-2 pt-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full rounded h-[20rem] lg:h-[30rem] object-center object-cover"
        />
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight max-w-[60ch]">
            {recipe.name}
          </h2>
          <p className="text-lg leading-relaxed opacity-80 max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laudantium esse et quam rem ratione doloremque ducimus tempora culpa
            incidunt dolorem, repellat cum delectus beatae, voluptatum harum
            aperiam enim repudiandae?
          </p>
          <div className="flex items-center divide-x-2 space-x-4">
            <div className="flex flex-col">
              <span className="opacity-80">PREP TIME</span>
              <span className="font-medium">{recipe.prepTimeMinutes} MIN</span>
            </div>
            <div className="flex flex-col ps-4">
              <span className="opacity-80">COOK TIME</span>
              <span className="font-medium">{recipe.cookTimeMinutes} MIN</span>
            </div>
            <div className="flex flex-col ps-4">
              <span className="opacity-80">SERVINGS</span>
              <span className="font-medium">{recipe.servings} PEOPLE</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        <div>
          <h3 className="text-3xl font-extrabold tracking-tight pb-4">
            Ingredients
          </h3>
          <ul className="space-y-2">
            {recipe?.ingredients?.map((ingredient) => {
              return (
                <li key={ingredient} className="flex items-center gap-2">
                  <MdOutlineCheckCircle />
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold tracking-tight pb-4">
            Instructions
          </h3>
          <ul className="space-y-2">
            {recipe?.instructions?.map((instruction) => {
              return (
                <li key={instruction} className="flex items-center gap-2">
                  <MdOutlineCheckCircle />
                  {instruction}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}