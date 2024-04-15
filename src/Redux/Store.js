import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import cartVisiblilitySlice from "./CartVisibility";
import CategorySlice from "./CategorySlice";
import searchSlice from "./SearchSlice";

const store=configureStore({reducer:{
    cart:CartSlice,
    cartVisiblility:cartVisiblilitySlice,
    category:CategorySlice,
    search:searchSlice
}})
export default store;