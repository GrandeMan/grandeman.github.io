import { useState } from "react";

import "./index.css";

function App() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<img
				width={100}
				height={100}
				className="animate-bounce "
				src="../public/11_icon.svg"
				alt="Under Construction"
			/>
			<h1 className="text-4xl font-extrabold">Site Under Construction</h1>
		</div>
	);
}

export default App;
