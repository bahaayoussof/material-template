import { Box, Container, Stack } from "@mui/material";
import Feeds from "./components/Feeds";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2}>
				<Sidebar />
				<Feeds />
				<Rightbar />
			</Stack>
		</Box>
	);
}

export default App;
