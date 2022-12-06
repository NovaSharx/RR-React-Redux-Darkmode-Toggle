import { configureStore } from "@reduxjs/toolkit"
import modeReducer from "./features/modeSlice"

const store = configureStore({
    reducer: {
        mode: modeReducer
    }
})

export default store