import { useEffect, useState } from "react";

export default function useFetchRecipes(limit = 0) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${limit}`
      );
      const data = await response.json();

      if (data) {
        setRecipes(data.recipes);
      }
    }

    fetchRecipes();
  }, []);

  return {
    recipes,
  };
}