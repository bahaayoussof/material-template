import {
	AccountCircle,
	Article,
	DarkMode,
	Group,
	Home,
	Person,
	Settings,
	Storefront,
} from "@mui/icons-material";
import { Box, List, Switch } from "@mui/material";
import React from "react";
import CustomListItem from "./CustomListItem";

const Sidebar = () => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<List>
				<CustomListItem url="#home" title="Home">
					<Home />
				</CustomListItem>
				<CustomListItem url="#pages" title="Pages">
					<Article />
				</CustomListItem>
				<CustomListItem url="#groups" title="Groups">
					<Group />
				</CustomListItem>
				<CustomListItem url="#marketplace" title="Marketplace">
					<Storefront />
				</CustomListItem>
				<CustomListItem url="#friends" title="Friends">
					<Person />
				</CustomListItem>
				<CustomListItem url="#settings" title="Settings">
					<Settings />
				</CustomListItem>
				<CustomListItem url="#profile" title="Profile">
					<AccountCircle />
				</CustomListItem>
				<CustomListItem url="#toggleMode" title={<Switch />}>
					<DarkMode />
				</CustomListItem>
			</List>
		</Box>
	);
};

export default Sidebar;
