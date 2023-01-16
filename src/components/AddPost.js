import {
	Add,
	CalendarMonth,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	styled,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "20px",
});

const AddPost = () => {
	const [toggleModal, setToggleModal] = useState(false);
	return (
		<>
			<Tooltip
				onClick={e => setToggleModal(true)}
				sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
			>
				<Fab color="primary" aria-label="add">
					<Add />
				</Fab>
			</Tooltip>

			<StyledModal
				open={toggleModal}
				onClose={e => setToggleModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={500}
					height={280}
					bgcolor={"background.default"}
					color={"text.primary"}
					p={3}
					borderRadius={5}
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Create Post
					</Typography>

					<UserBox>
						<Avatar
							sx={{ width: 40, height: 40 }}
							src="https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=1600"
						/>
						<Typography fontWeight={500} variant="span">
							John Doe
						</Typography>
					</UserBox>

					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-flexible"
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant="standard"
					/>

					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color="primary" />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="error" />
					</Stack>

					<ButtonGroup
						variant="contained"
						aria-label="outlined primary button group"
						fullWidth
					>
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>
							<CalendarMonth />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default AddPost;
