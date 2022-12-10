import { combineReducers, createSelector } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

// use of create Selector

const cartItems = (state) => state.cart;

// export const itemsCount = createSelector([cartItems],cartItems.reduce((accumulator,cartItem) => cartItem,0))

// export const cartTotal = createSelector([cartItems], (cartItems) =>
//   cartItems.reduce(
//     (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,0
//   )
// );
