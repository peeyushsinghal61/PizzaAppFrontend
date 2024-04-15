import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartitems:[]
}
const cartSlice=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addItem:(state,action)=>{
            let isAlreadyPresent=state.cartitems.find((item)=>item.id===action.payload.id)
            if(isAlreadyPresent){
            state.cartitems=state.cartitems.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+=1}:item)}
            else state.cartitems.push(action.payload)
           
        },
        deleteItemFromCart:(state,action)=>{ 
            state.cartitems=state.cartitems.filter((item)=>item.id!=action.payload)
        },
        incrementQty:(state,action)=>{
            state.cartitems=state.cartitems.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)}
        ,
        decrementQty:(state,action)=>{
            state.cartitems=state.cartitems.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)}
        }
          
})

export const {addItem,deleteItemFromCart,incrementQty,decrementQty}=cartSlice.actions;
export default cartSlice.reducer
