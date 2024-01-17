import InfiniteScroll from "./components/InfScroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./handlers/DarkModeHandler";
import "./index.css";
import Home from "./pages/Home";

function App() {
	return (
		<DarkModeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</DarkModeProvider>
	);
}

export default App;
