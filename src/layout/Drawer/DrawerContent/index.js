import { Inbox } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { itemsMenu } from "../../../config";
import menuItems from "../../../menu-items";
import { NavGroup } from "./NavGroup";

const DrawerContent = () => {

    const navGroups = menuItems.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        }
    });
    
    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default DrawerContent;