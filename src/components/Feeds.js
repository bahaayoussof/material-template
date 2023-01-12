import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import { DATA } from "../data";

const Feeds = () => {
	return (
		<Box flex={4} p={2}>
			{DATA.map(item => {
				const { id, name, imageUrl, post, date, color } = item;
				return (
					<Post
						key={id}
						name={name}
						imageUrl={imageUrl}
						date={date}
						post={post}
						color={color}
					/>
				);
			})}
		</Box>
	);
};

export default Feeds;
