import { configureStore } from "@reduxjs/toolkit";
import authorizeReducer from "./features/authorize/authorizeSlice"
import currentPageReducer from "./features/current-page/currentPageSlice"

export const store = configureStore({
    reducer: {
        authorize: authorizeReducer,
        currentPage: currentPageReducer
    },
})

export type RootState = ReturnType<typeof store.getState>