import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import Gallery from "./Gallery";
import Conversations from "./Conversations";

const Rightbar = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed" width={300}>
				<Typography variant="h6" fontWeight={100}>
					Online Friends
				</Typography>
				<AvatarGroup max={4}>
					<Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
					<Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
					<Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
					<Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
					<Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
				</AvatarGroup>

				<Typography variant="h6" fontWeight={100} mt={2} mb={2}>
					Latest Photos
				</Typography>
				<Gallery />

				<Typography variant="h6" fontWeight={100} mt={2} mb={2}>
					Latest Conversations
				</Typography>
				<Conversations />
			</Box>
		</Box>
	);
};

export default Rightbar;
