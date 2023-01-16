import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Feeds from "./components/Feeds";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import AddPost from "./components/AddPost";
import { useState } from "react";

function App() {
	const [mode, setMode] = useState("light");

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={"background.default"} color={"text.primary"}>
				<Navbar />
				<Stack direction="row" spacing={2}>
					<Sidebar mode={mode} setMode={setMode} />
					<Feeds />
					<Rightbar />
				</Stack>
				<AddPost />
			</Box>
		</ThemeProvider>
	);
}

export default App;
