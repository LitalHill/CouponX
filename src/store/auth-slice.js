import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {token: localStorage.getItem('token')},
    reducers:{
        login(state, action){
            localStorage.setItem('token', action.payload)
            state.token = action.payload
        },
        logout(state){
            localStorage.removeItem('token')
            state.token = undefined
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer