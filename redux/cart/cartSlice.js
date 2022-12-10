import { createSlice } from "@reduxjs/toolkit";
import { addItemsToCart } from "./cartUtils";

const cartSlice = createSlice({
    name:"cart",
    // initialState:{
    //     products:[],
    //     // quantity:0,
    //     // total:0,
    // },
    initialState:[],
    reducers:{
        addProduct:(state,action) =>addItemsToCart(state,action.payload),
        removeProduct:(state,action) =>{
            state.pop(action.payload);
        }
    }
});

export const {addProduct,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;