import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({cart:cartReducer,user:userReducer})