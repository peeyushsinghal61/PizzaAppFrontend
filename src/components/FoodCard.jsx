import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";
const FoodCard = (props) => {
  const {id,   img, name, price, desc, rating } = props.item;
  const handleToast=props.handleToast;
  
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-[250px] rounded-lg font-bold p-5">
      <img
        className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out w-[18vw] h-[15vw]"
        src={img}
      />
      <div className="flex justify-between my-2">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between my-2">
        <span className="flex justify-center place-items-center">
          <FaStar className="text-yellow-400 mx-2" />
          {rating}
        </span>
        <button
          className="p-1 text-white bg-green-500 rounded-lg text-sm hover:bg-green-600"
          onClick={() => {handleToast(name)
            dispatch(addItem({ id,img, name, price, desc, rating,qty:1 } ));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
