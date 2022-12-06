import {loginStart,loginSuccess,loginFailure} from "./userSlice";
import axios from "axios";

export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try {
        const res = axios.post('https://electronic-shop.onrender.com/api/auth/login',res);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
};
