import React from "react";
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from "@mui/material";
import {
	Bookmark,
	BookmarkBorder,
	MoreVert,
	ThumbDown,
	ThumbDownOffAlt,
	ThumbUp,
	ThumbUpOffAlt,
} from "@mui/icons-material";
import moment from "moment/moment";
import { pink } from "@mui/material/colors";

const Post = ({ name, post, imageUrl, date, color }) => {
	return (
		<Box flex={4} p={2}>
			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: color }} aria-label="recipe">
							{name.slice(0, 1)}
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVert />
						</IconButton>
					}
					title={name}
					subheader={moment(date).format("MMMM Do YYYY")}
				/>
				<CardMedia component="img" height="10%" image={imageUrl} alt="Paella dish" />
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{post}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="like">
						<Checkbox icon={<ThumbUpOffAlt />} checkedIcon={<ThumbUp />} />
					</IconButton>
					<IconButton aria-label="dislike">
						<Checkbox
							icon={<ThumbDownOffAlt />}
							checkedIcon={<ThumbDown />}
							sx={{
								"&.Mui-checked": {
									color: pink[600],
								},
							}}
						/>
					</IconButton>
					<IconButton aria-label="save">
						<Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
};

export default Post;
