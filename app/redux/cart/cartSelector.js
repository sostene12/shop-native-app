import { createSelector } from "@reduxjs/toolkit";

// input selector
const SelectCart = (state) => state.cart;

// output Selector
export const selectCartItems = createSelector([SelectCart],
  (cart) => cart
);

export const selectCartItemsCount = createSelector([selectCartItems],(cartItems) => cartItems.reduce((accumulator,cartItem) => accumulator + cartItem.quantity,0));

export const selectCartTotal = createSelector([selectCartItems], 
  (cartItems) => cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,0)
);