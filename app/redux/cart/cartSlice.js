import { createSlice } from "@reduxjs/toolkit";
import { addItemsToCart,changeItemQty } from "./cartUtils";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addProduct:(state,action) =>addItemsToCart(state,action.payload),
        changeQty:(state,action) => changeItemQty(state,action.payload),
        clearCart:(state) =>{
            state.cart = [];
        },
        removeProduct:(state,action) =>{
            state.pop(action.payload);
        }
    }
});

export const {addProduct,removeProduct,changeQty,clearCart} = cartSlice.actions;
export default cartSlice.reducer;