import {createSlice} from "@reduxjs/toolkit"


const initialState={
    visbility:false
}

const cartVisiblilitySlice=createSlice({
    name:"cartVisiblility",
    initialState:initialState,
    reducers:{
        cartVisible:(state)=>{
            state.visbility= !state.visbility
        }
    }
})
 export const {cartVisible,cartHidden}=cartVisiblilitySlice.actions;
 export default  cartVisiblilitySlice.reducer