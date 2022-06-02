import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapboxAutocomplete from "react-mapbox-autocomplete";

export default function _Search(props) {
    const {onSelect} = props;
    return (
        <>
            <IconButton sx={{p: "10px"}} aria-label="menu" color="primary">
                <LocationOnIcon/>
            </IconButton>
            <MapboxAutocomplete
                publicKey={process.env.REACT_APP_MAPBOX_TOKEN}
                inputClass="form-control search"
                onSuggestionSelect={onSelect}
                //   country="us"
                resetSearch={false}
                placeholder="Search Address..."
            />
        </>
    );
}
