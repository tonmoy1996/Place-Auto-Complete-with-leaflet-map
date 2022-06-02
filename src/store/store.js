import {configureStore} from "@reduxjs/toolkit";
import locationReducer from "../slices/LocationFetcherSlice"

export default configureStore({
    reducer: {
        location: locationReducer
    }
});