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

const Post = () => {
	return (
		<Box flex={4} p={2}>
			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: "skyblue" }} aria-label="recipe">
							P
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVert />
						</IconButton>
					}
					title="Profile Name"
					subheader={moment().format("MMMM Do YYYY")}
				/>
				<CardMedia
					component="img"
					height="10%"
					image="https://images.pexels.com/photos/1655901/pexels-photo-1655901.jpeg"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook together with
						your guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
