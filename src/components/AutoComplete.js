import Box from '@mui/material/Box';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import Map from "./Map";
import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {addLocationDetails, selectAddress} from "../slices/LocationFetcherSlice";


const mapAccess = {
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_TOKEN
};


const Autocomplete = () => {
    const data = useSelector(selectAddress);
    const dispatch = useDispatch();

    function _suggestionSelect(address, lat, long, text) {
        const location = {
            address: address,
            lat: lat,
            long: long
        }
        dispatch(addLocationDetails(location));
    }

    return (
        <Box
            sx={{
                bgcolor: 'background.primary',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
            }}
        >
            <Paper
                component="form"
                sm={{
                    padding: "2px 4px", display: "flex", flexDirection: "row", alignItems: "center",
                }}
                variant="elevation"
            >
                <IconButton sx={{p: "10px"}} aria-label="menu">
                    <LocationOnIcon/>
                </IconButton>
                <MapboxAutocomplete
                    publicKey={mapAccess.mapboxApiAccessToken}
                    inputClass="form-control search"
                    onSuggestionSelect={_suggestionSelect}
                    //   country="us"
                    resetSearch={false}
                    placeholder="Search Address..."
                />
            </Paper>

            {data ? <Map data={data}/> : ""}

        </Box>);
}
export default Autocomplete;