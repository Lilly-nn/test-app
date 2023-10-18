import { createSlice } from "@reduxjs/toolkit";

type LoginPageState = {
    currentPage: "Sign in" | "Sign up";
}

const initialState: LoginPageState = {
    currentPage: "Sign in"
}

const currentPageSlice = createSlice({
    name: "login page",
    initialState,
    reducers: {
        setSignIn: (state) => {
            state.currentPage = "Sign in"
        },
        setSignUp: (state) => {
            state.currentPage = "Sign up"
        },
    }
})

export const { setSignIn, setSignUp } = currentPageSlice.actions;
export default currentPageSlice.reducer;