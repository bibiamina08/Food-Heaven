import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function Hero() {
  const { recipes } = useFetchRecipes(5);

  return (
    <div className="carousel w-full">
      {recipes.map((recipe) => {
        return (
          <div
            key={recipe.id}
            id={"slide" + recipe.id}
            className="carousel-item relative w-full"
          >
            <img
              src={recipe.image}
              className="w-full h-[35rem] object-center object-cover"
            />
            <div className="absolute bg-black/50 text-white inset-0 flex ps-10 justify-center -mt-[18rem] md:-mt-0 flex-col">
              <span className="flex items-center gap-1 text-xl pb-6">
                <HiTrendingUp className="size-7 text-white" />
                85% would make this again.
              </span>
              <h1 className="lg:text-6xl text-3xl md:text-5xl font-extrabold tracking-tight pb-4">
                {recipe.name}
              </h1>
              <p className="text-center max-w-[60ch] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                non quaerat perferendis voluptatum suscipit nemo quidem!
                Voluptas perferendis saepe minus error illo facere vero.
                Adipisci error minima amet dignissimos delectus.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={"#slide" + (recipe.id - 1)}
                className="btn btn-circle btn-sm"
              >
                ❮
              </a>
              <a
                href={"#slide" + (recipe.id + 1)}
                className="btn btn-circle btn-sm"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

