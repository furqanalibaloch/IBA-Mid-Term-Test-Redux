import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../Features/car/carShowroom"
const store = configureStore({
    reducer: {
        car: carReducer,
    }
})
  

export default store