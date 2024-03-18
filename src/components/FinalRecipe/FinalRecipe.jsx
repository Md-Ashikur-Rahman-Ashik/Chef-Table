import { useEffect, useState } from "react";
import "../Recipe/Recipe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FinalRecipe = () => {
  const [addCook, setAddCook] = useState([]);

  const handleAddCook = (cook) => {
    const newCook = [...addCook, cook];
    const cookId = cook.recipe["recipe_id"];

    const isExist = addCook.find((item) => item.recipe["recipe_id"] === cookId);

    if (!isExist) {
      setAddCook(newCook);
    } else {
      const showToastMessage = () => {
        toast("Item exists", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      showToastMessage();
    }
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <div className="flex mx-32 justify-between">
        <div className="grid grid-cols-2 w-full">
          {recipes.map((recipe) => (
            <Recipe
              addCook={addCook}
              handleAddCook={handleAddCook}
              key={recipe["calories"]}
              recipe={recipe}
            ></Recipe>
          ))}
        </div>
        <CookingSummary addCook={addCook}></CookingSummary>
      </div>
    </>
  );
};

const Recipe = (recipe, { handleAddCook }, addCook) => {
  //   console.log(recipe);
  //   console.log(recipe.handleAddCook);
  //   console.log(recipe.addCook);
  const finalCook = recipe.handleAddCook;

  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    recipe_id,
    preparing_time,
    calories,
  } = recipe.recipe;

  // console.log(recipe_id);

  return (
    <div className="w-11/12 mb-4">
      <div className=" border rounded-2xl p-4">
        <figure className="w-full">
          <img
            className="w-full h-40 rounded-2xl pb-4"
            src={recipe_image}
            alt={`A picture of ${recipe_name}`}
          />
        </figure>
        <div className="w-full">
          <h2 className="pb-2 font-semibold text-xl">{recipe_name}</h2>
          <p className="w-full font-firaSans font-normal pb-4">
            {short_description}
          </p>
          <div className="w-full border-t border-b pt-4 pb-4">
            <p className="font-medium text-[18px]">
              Ingredients: {ingredients.length}
            </p>
            <ul className="pl-4 pt-2">
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="flex gap-2 items-center">
              <img src="../../../public/clock-regular.svg" alt="" />
              <p>{preparing_time}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-4"
                src="../../../public/cookingFire.svg"
                alt=""
              />
              <div className="flex gap-2">
                {calories} <p>calories</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              className="btn bg-[#0BE58A] rounded-3xl"
              onClick={() => finalCook(recipe)}
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CookingSummary = (addCook) => {
  // console.log(addCook);

  const useCooks = addCook.addCook;

  return (
    <div className="w-1/2 border rounded-2xl pt-6 px-6">
      <h5 className="text-center text-2xl font-semibold pb-2 border-b">
        Want to cook: {useCooks.length}
      </h5>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          {/* <tbody id="buttonCook" className="hidden"> */}
          <tbody>
            {/* row 1 */}
            {useCooks.map((useCook) => (
              <Tbody
                key={useCook.recipe["recipe_id"]}
                useCook={useCook}
              ></Tbody>
            ))}
            {/* row 2 */}
            {/* <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr> */}
            {/* row 3 */}
            {/* <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Tbody = ({ useCook }) => {
  const serial = useCook.addCook.length;
  const newSerial = serial + 1;

  return (
    <>
      <tr>
        <th>{newSerial}</th>
        <td>{useCook.recipe["recipe_name"]}</td>
        <td>{useCook.recipe["preparing_time"]} minutes</td>
        <td>{useCook.recipe["calories"]} calories</td>
        <td>
          <button className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
        </td>
      </tr>
    </>
  );
};

export default FinalRecipe;
export { Recipe, CookingSummary, Tbody };
