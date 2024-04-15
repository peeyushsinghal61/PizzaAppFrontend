import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrFormSubtract } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import toast,{Toaster} from "react-hot-toast"
import { deleteItemFromCart,incrementQty,decrementQty } from "../Redux/CartSlice";
const CartItem = (props) => {
  const {id, img, name, price,qty}=props.item;
  const quantity=props.quantity;
  const dispatch = useDispatch();
  return (
    <div className="m-2 flex flex-row shadow-md gap-2 p-2 mb-3">
      <div className="w-16 hover:scale-105 transition-all animate-pulse">
        <img src={img} />
      </div>
      <div>
        <div className="flex flex-row items-center justify-center" >
        <h2 className="font-semibold text-gray-800">{name}</h2>
        <RiDeleteBin6Fill className="absolute right-7 cursor-pointer" onClick={()=>{console.log(name);toast(`your item is removed: ${name}!`,
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
); dispatch(deleteItemFromCart(id))}}/> 
        </div>  
        <div className="flex justify-between">
        <span className="text-green-500 font-bold">₹{price}</span>
        <div className="flex flex-row items-center justify-center gap-2 absolute right-6">
          <GrFormSubtract className="border-2 hover:bg-green-500 rounded-md p-0.5 text-xl cursor-pointer transition-all ease-linear" onClick={()=>qty>1 && dispatch(decrementQty({id}))}/>
          <span>{qty}</span>
          <IoIosAdd className="border-2 hover:bg-green-500 rounded-md p-0.5 text-xl  cursor-pointer transition-all ease-linear" onClick={()=>{dispatch(incrementQty({id}))}}/>
        </div></div>
      </div>
    </div>
  );
};

export default CartItem;
