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

const Sidebar = ({ mode, setMode }) => {
	// const themeHandler = e => {
	// 	if (e.target.checked) {
	// 		setMode("dark");
	// 	} else setMode("light");
	// };

	return (
		<Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed">
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
					<CustomListItem
						title={<Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />}
					>
						<DarkMode />
					</CustomListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
