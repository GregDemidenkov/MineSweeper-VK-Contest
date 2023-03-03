import { configureStore } from "@reduxjs/toolkit"

import gameDataReducer from "./gameDataSlice"

export const store = configureStore({
    reducer: {
        gameDataState: gameDataReducer,
    }
})