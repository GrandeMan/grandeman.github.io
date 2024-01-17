import InfiniteScroll from "./components/InfScroll";
import Loading from "./components/Loading";
import { DarkModeProvider } from "./handlers/DarkModeHandler";
import "./index.css";
import Home from "./pages/Home";

function App() {
	return (
		<DarkModeProvider>
			<Home />
		</DarkModeProvider>
	);
}

export default App;
