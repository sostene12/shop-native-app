import { combineReducers} from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});



