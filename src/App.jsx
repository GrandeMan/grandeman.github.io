import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./handlers/DarkModeHandler";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<DarkModeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</DarkModeProvider>
	);
}

export default App;
