import InfiniteScroll from "./components/InfScroll";
import "./index.css";

function App() {
	return (
		<div className="bg-orange-600 to-red-600 r w-full h-full flex flex-col justify-between items-center">
			<InfiniteScroll />

			<img
				width={100}
				height={100}
				className="animate-bounce "
				src="../11_icon.svg"
				alt="Under Construction"
			/>
			<InfiniteScroll />
		</div>
	);
}

export default App;
