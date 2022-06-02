import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null
};

export const LocationSlice = createSlice({
    name: "locationSlice", initialState, reducers: {
        addLocationDetails: (state, action) => {
            state.data = action.payload
        }
    }
});

export const {addLocationDetails, initialMapInstance} = LocationSlice.actions;

export const selectAddress = state => state.location.data;
export default LocationSlice.reducer;