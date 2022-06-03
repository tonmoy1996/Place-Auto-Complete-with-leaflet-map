import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ListItemText from "@mui/material/ListItemText";

export default function _ListItem({address}){
    return(
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <AddLocationAltIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={address} />
            </ListItemButton>
        </ListItem>
    )
}