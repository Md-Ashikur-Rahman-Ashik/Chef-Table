import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const RecipeCard = () => {

  const [cooking, setCooking] = useState([]);

  const handleAddCook = (cook) => {
    console.log("Button Clicked");
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-2 w-full">
      {recipes.map((recipe) => (
        <Recipe
          handleAddCook={handleAddCook}
          key={recipe["calories"]}
          recipe={recipe}
        ></Recipe>
      ))}
    </div>
  );
};

export default RecipeCard;
