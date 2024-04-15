import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import CategoryMenu from './CategoryMenu'
import FoodItems from './FoodItems'
import Cart from './Cart'

const Home = () => {
  return (<>
   <Navbar/>
   <CategoryMenu/>
   <FoodItems/>
   <Cart/>
   </>
  )
}

export default Home