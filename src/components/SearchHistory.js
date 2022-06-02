import React from "react";
import {useSelector} from 'react-redux';
import {history} from "../slices/LocationSlice";
import List from '@mui/material/List';
import _ListItem from "./shared/_ListItem";
import {Typography} from "@mui/material";

const SearchHistory = () => {
    const data = useSelector(history);
    return (
        <div>
            <Typography variant="h5" component="div">
                Search History
            </Typography>
            <List>
                {data.length > 0 && data.map((item,key) => (
                    <_ListItem address={item.address} key={key}/>
                ))}
            </List>
        </div>
    )
}
export default SearchHistory;