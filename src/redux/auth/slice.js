import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./authApi";

const initialState = {
    user: {name:null, email:null},
    token: null,
    isLoggedIn:false,
    isRefreshing:false,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.pending,(state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, (state) => {
            state.isLoggedIn = false;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.pending, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, (state) => {
            state.isLoggedIn = false
        })
        .addCase(logOut.fulfilled, (state) => {
            state.user= { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.pending, (state) => {
            state.user= { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, (state) =>{
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        })
    }
})

export const authReducer = authSlice.reducer