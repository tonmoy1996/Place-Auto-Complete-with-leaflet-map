import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null
};

export const LocationSlice = createSlice({
    name: "locationSlice",
    initialState,
    reducers: {
        addLocationDetails: (state, action) => {
            state.address = action.payload
        }
    }
});

export const {addLocationDetails} = LocationSlice.actions;

export const selectAddress = state => state.location.address;

export default LocationSlice.reducer;