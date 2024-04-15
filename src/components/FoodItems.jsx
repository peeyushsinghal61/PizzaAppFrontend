import React from 'react'
import FoodCard from './FoodCard'
import FoodItemsData from '../data/FoodItemsData'
import toast,{Toaster} from "react-hot-toast"
import {useSelector} from  "react-redux";
const FoodItems = () => {
  const categoryType=useSelector(store=>store.category.categoryType)
  const foodSearch=useSelector(store=>store.search.search)
  console.log(categoryType);
  const handleToast=(itemname)=>{toast(`your item is added: ${itemname}!`,
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);}
  return (
    <div className='mx-6 flex flex-wrap gap-10 justify-center lg:justify-start my-10'>
     {categoryType==="All" ? FoodItemsData.map((item)=> item.name.toLowerCase().includes(foodSearch.toLowerCase()) && <FoodCard key={item.id} item={item} handleToast={handleToast}/>):
     FoodItemsData.map((item)=> item.category===categoryType &&  item.name.toLowerCase().includes(foodSearch.toLowerCase()) && <FoodCard key={item.id} item={item} handleToast={handleToast}/>)}
      
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  )
}

export default FoodItems