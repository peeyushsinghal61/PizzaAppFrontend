import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartVisible } from "../Redux/CartVisibility";
import {useNavigate} from "react-router-dom";
import { Navigate } from 'react-router-dom';
const Cart = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.cart.cartitems);
  const visiblility = useSelector((store) => store.cartVisiblility.visbility);
  let totalItems=itemsInCart.reduce((acc,item)=>acc+item.qty,0);
  let totalAmount=itemsInCart.reduce((acc,item)=>acc+item.qty*item.price,0);
  return (
    <div>
      <div
        className={`bg-white w-full md:w-[20vw] lg:w-[20vw] h-full fixed top-0 right-0 ${
          visiblility ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-30`}
      >
        <div className="flex flex-row py-2 items-center mx-4 justify-between">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdCloseCircleOutline
            className="border-2 font-bold text-lg hover:border-red-400 hover:scale-110 cursor-pointer"
            onClick={() => {
              dispatch(cartVisible());
            }}
          />
        </div>
        {itemsInCart.length>0 ?itemsInCart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        }):<h1 className="text-xl font-bold text-center text-gray-800">Your cart is empty</h1>}

        <div className="absolute bottom-0 mx-4">
          <h3 className="font-semibold text-gray-800">Items:{totalItems}</h3>
          <h3 className="font-semibold text-gray-800">Total amount: {totalAmount}</h3>
          <br className="w-[90vw] lg:w-[18vm] mx-4" />
          <button className="bg-green-500 font-bold py-2 rounded-lg px-3 w-[90vw] md:w-[19vw] lg:w-[18vw] text-white" onClick={()=>{ navigate("/success");dispatch(cartVisible())}}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
