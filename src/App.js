import { Box, Stack } from "@mui/material";
import Feeds from "./components/Feeds";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import AddPost from "./components/AddPost";

function App() {
	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2}>
				<Sidebar />
				<Feeds />
				<Rightbar />
			</Stack>
			<AddPost />
		</Box>
	);
}

export default App;
