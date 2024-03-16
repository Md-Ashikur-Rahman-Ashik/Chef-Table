import { useState } from 'react'
import './App.css'
import "./components/Navbar/Navbar.css"
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RecipeDescription from './components/RecipeDescription/RecipeDescription'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeDescription></RecipeDescription>
    </>
  )
}

export default App
