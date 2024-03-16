import { useState } from 'react'
import './App.css'
import "./components/Navbar/Navbar.css"
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RecipeDescription from './components/RecipeDescription/RecipeDescription'
import RecipeCard from './components/RecipeCard/RecipeCard'
import CookingSummary from './components/CookingSummary/CookingSummary'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeDescription></RecipeDescription>
      <div className='flex mx-32 justify-between'>
        <RecipeCard className=""></RecipeCard>
        <CookingSummary className=""></CookingSummary>
      </div>
    </>
  )
}

export default App
