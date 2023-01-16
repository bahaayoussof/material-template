import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { PHOTOS } from "../data";

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const Gallery = () => {
	return (
		<ImageList sx={{ width: 500, height: 250 }} variant="quilted" cols={4} rowHeight={122}>
			{PHOTOS.map(item => (
				<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
					<img
						{...srcset(item.img, 120, item.rows, item.cols)}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default Gallery;
