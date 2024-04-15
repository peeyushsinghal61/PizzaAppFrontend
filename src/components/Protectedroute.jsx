import React from 'react'
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom"
const Protectedroute = ({element}) => {
    const cartItems=useSelector(store=>store.cart.cartitems)
  return <>
    {cartItems.length>0 ? element:<Navigate to="/"/>}
    </>
  
}

export default Protectedroute