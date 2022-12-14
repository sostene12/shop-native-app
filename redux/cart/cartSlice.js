import { createSlice } from "@reduxjs/toolkit";
import { addItemsToCart,changeItemQty } from "./cartUtils";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addProduct:(state,action) =>addItemsToCart(state,action.payload),
        changeQty:(state,action) => changeItemQty(state,action.payload),
        removeProduct:(state,action) =>{
            state.pop(action.payload);
        }
    }
});

export const {addProduct,removeProduct,changeQty} = cartSlice.actions;
export default cartSlice.reducer;