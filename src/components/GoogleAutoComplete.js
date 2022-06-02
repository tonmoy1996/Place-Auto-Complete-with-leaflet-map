import React from "react";
import { Container, Box } from "@mui/material";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
const GoogleAutoComplete = () => {
    const center = {
        lat: -3.745,
        lng: -38.523
      };
      const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GAPI_KEY
      })

  return (
    <React.Fragment>
      <Container style={{ display: 'flex',
        justifyContent: 'center'}}>
      
      {isLoaded && <GoogleMap center={center} zoom={15} mapContainerStyle={{height: '100%',width:'100%'}} ></GoogleMap>}
      </Container>
    </React.Fragment>
  );
};
export default GoogleAutoComplete;
