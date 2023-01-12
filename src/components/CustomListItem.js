import React from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const CustomListItem = ({ url, children, title }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton component="a" href={url}>
				<ListItemIcon>{children}</ListItemIcon>
				<ListItemText primary={title} />
			</ListItemButton>
		</ListItem>
	);
};

export default CustomListItem;
