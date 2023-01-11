import { Email, Notifications, RssFeed } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";

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
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					Material Blog
				</Typography>
				<RssFeed sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="Search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Email />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar src="https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=1600" />
				</Icons>
				<UserBox>
					<Avatar src="https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=1600" />
					<Typography variant="span">John</Typography>
				</UserBox>
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
