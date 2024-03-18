import { useEffect, useState } from "react";
import "./App.css";
import "./components/Navbar/Navbar.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RecipeDescription from "./components/RecipeDescription/RecipeDescription";
import FinalRecipe from "./components/FinalRecipe/FinalRecipe";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeDescription></RecipeDescription>
      <FinalRecipe></FinalRecipe>
    </>
  );
}

export default App;
