import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
    name: 'coupon',
    initialState: {couponVisibility: true},
    reducers: {
        toggle(state){
            state.couponVisibility = !state.couponVisibility
        }
    }
})

export const CouponActions = couponSlice.actions
export default couponSlice.reducer