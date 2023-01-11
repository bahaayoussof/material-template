import React, { useState } from "react";
import { Email, Notifications, RssFeed } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
}));

const Search = styled(Box)(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alignItems: "center",
	gap: "20px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					Material Blog
				</Typography>
				<RssFeed sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase sx={{ width: "100%" }} placeholder="Search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Email />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar
						onClick={e => setToggleMenu(true)}
						src="https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=1600"
					/>
				</Icons>
				<UserBox onClick={e => setToggleMenu(true)}>
					<Avatar src="https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=1600" />
					<Typography variant="span">John</Typography>
				</UserBox>
			</StyledToolbar>

			<Menu
				id="demo-menu"
				aria-labelledby="demo-button"
				open={toggleMenu}
				onClose={e => setToggleMenu(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
