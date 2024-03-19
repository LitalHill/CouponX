import { configureStore } from "@reduxjs/toolkit";
import couponReducer from "./coupon-slice"
import authReducer from "./auth-slice"
import cartReducer from "./cart-slice"


const store = configureStore({
    reducer: {
        'auth': authReducer,
        'coupon': couponReducer,
        'cart' : cartReducer,
    }
})

export default store