import React, { useState } from 'react'
import {BeatLoader} from"react-spinners";

const Success = () => {
  const [loading,setLoading]=useState(true);
  setTimeout(()=>{
    setLoading(false);
  },5000)
  
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
    {loading?<BeatLoader color="#36d7b7"/>:<div>
 <h2>Order Successful!</h2>
 <p>Your order has been successfully placed</p></div>
} 
</div>
  )
}

export default Success;