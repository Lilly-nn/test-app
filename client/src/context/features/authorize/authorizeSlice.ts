import { createSlice } from "@reduxjs/toolkit";

type authorizeState = {
    isAuthorized: boolean;
}

const initialState: authorizeState = {
    isAuthorized: localStorage.getItem('user_token') ? true : false,
}

const authorizeSlice = createSlice({
    name: "authorized",
    initialState,
    reducers: {
        signIn: (state, action) => {
            localStorage.setItem("user_token", action.payload)
            state.isAuthorized = true;
        },
        signOut: (state) => {
            localStorage.removeItem("user_token");
            state.isAuthorized = false;
        }
    }
})

export const { signIn, signOut } = authorizeSlice.actions;
export default authorizeSlice.reducer;