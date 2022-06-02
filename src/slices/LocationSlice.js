import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    searchHistory: []
};

export const LocationSlice = createSlice({
    name: "locationSlice",
    initialState,
    reducers: {
        addLocationDetails: (state, action) => {
            state.data = action.payload
            state.searchHistory = [...state.searchHistory, action.payload]
        }
    }
});

export const {addLocationDetails} = LocationSlice.actions;

export const selectAddress = state => state.location.data;
export const history = state => state.location.searchHistory;
export default LocationSlice.reducer;