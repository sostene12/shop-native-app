import {loginStart,loginSuccess,loginFailure} from "./userSlice";
import axios from "axios";

export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post('https://electronic-shop.onrender.com/api/auth/login',user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        console.log(error.message);
        dispatch(loginFailure())
    }
};
