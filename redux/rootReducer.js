import { combineReducers, createSelector } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({cart:cartReducer,user:userReducer});


// use of create Selector

// const cartItems = (state) => state.cart;

// export const totalItemQtySelector = createSelector([cartItems],(cartItems => cartItems));