import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    // initialState:{
    //     products:[],
    //     // quantity:0,
    //     // total:0,
    // },
    initialState:[],
    reducers:{
        addProduct:(state,action) =>{
            // state.quantity +=1;
            state.push(action.payload);
            // state.total += action.payload.price *state.quantity;
        },
        removeProduct:(state,action) =>{
            state.pop(action.payload);
        }
    }
});

export const {addProduct,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;