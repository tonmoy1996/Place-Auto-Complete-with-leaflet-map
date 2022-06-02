import Box from '@mui/material/Box';
import Paper from "@material-ui/core/Paper";

import {useSelector, useDispatch} from 'react-redux';
import {addLocationDetails, selectAddress} from "../slices/LocationSlice";

import _Search from "./shared/_Search";
import Index from "./map";
import _RightSideBar from "./shared/_RightSideBar";

const Autocomplete = () => {
    const data = useSelector(selectAddress);
    const dispatch = useDispatch();

    const onSelect = (address, lat, long) => {
        const response = {
            address: address,
            lat: lat,
            long: long
        }
        dispatch(addLocationDetails(response));
    }

    return (
        <Box
            sx={{
                color: 'background.main',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold'
            }}
        >
            <Paper
                component="form"
                sm={{
                    padding: "2px 4px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    maxWidth: "200px"
                }}
                variant="elevation"
            >
                <_Search onSelect={onSelect}/>

            </Paper>

            {data ? <Index data={data}/> : ""}
            <_RightSideBar />

        </Box>);
}
export default Autocomplete;