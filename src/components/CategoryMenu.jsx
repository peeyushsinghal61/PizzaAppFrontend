import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { cartVisible } from "../Redux/CartVisibility";
import { useDispatch, useSelector } from "react-redux";
import FoodItemsData from "../data/FoodItemsData";
import { useEffect, useState } from "react";
import { selectCategory } from "../Redux/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [color,setColor]=useState("bg-gray-200");
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.cart.cartitems);
  const selectedCategory = useSelector((store) => store.category.categoryType);
  useEffect(() => {
    let uniqueCategoriesArray = ["All"];
    FoodItemsData.forEach((item) => {
      if(!uniqueCategoriesArray.includes(item.category)){uniqueCategoriesArray.push(item.category)}
    });
    setCategories(uniqueCategoriesArray)
   
  }, []);
  return (
    <div className="mx-6 ">
      <div className="flex flex-row justify-between">
        <h3 className="text-lg font-bold">Find the best food</h3>
      </div>
      <div className=" space-x-5 cursor-pointer my-5 flex overflow-x-scroll lg:overflow-x-hidden ">
        {categories.map((item,index) => 
            <button key={index} className={`border  text-center ${selectedCategory===item && "bg-green-500"} px-3 py-2 rounded-lg hover:bg-green-500 font-bold hover:text-white`} onClick={(e)=>{
                dispatch(selectCategory(e.target.innerText)); 
            }}> 
              {item}
            </button>
          
        )}
      </div>
      <RiShoppingCart2Fill
        className={`bg-white rounded-lg text-4xl p-2 hover:cursor-pointer absolute top-36 right-16 ${
          itemsInCart.length > 0 && "animate-bounce delay-500"
        }`}
        onClick={() => {
          dispatch(cartVisible());
        }}
      />
    </div>
  );
};

export default CategoryMenu;
