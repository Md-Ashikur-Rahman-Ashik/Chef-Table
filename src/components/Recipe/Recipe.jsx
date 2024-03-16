import Table from "../Table/Table";
import "./Recipe.css";

const Recipe = (recipe) => {
  // console.log(recipe);

  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    recipe_id,
    preparing_time,
    calories
  } = recipe.recipe;

  // console.log(recipe_id);

  const handleAddCook = () => {
    <Table></Table>
  }

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
              <img className="w-4" src="../../../public/cookingFire.svg" alt="" />
              <div className="flex gap-2">
              {calories} <p>calories</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="btn bg-[#0BE58A] rounded-3xl" onClick={handleAddCook}>Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
