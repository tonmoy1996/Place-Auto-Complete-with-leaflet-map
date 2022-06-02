import {configureStore} from "@reduxjs/toolkit";
import locationReducer from "../slices/LocationSlice"

export default configureStore({
    reducer: {
        location: locationReducer
    }
});