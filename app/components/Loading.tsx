import { useState, useEffect } from "react";

const Images = {
	0: "../alts/Asset2.svg",
	1: "../alts/Asset4.svg",
	2: "../alts/Asset5.svg",
	3: "../alts/Asset6.svg",
	4: "../alts/Asset7.svg",
	5: "../alts/Asset8.svg",
	6: "../alts/Asset9.svg",
	7: "../alts/Asset10.svg",
	8: "../alts/Asset11.svg",
	9: "../alts/Asset12.svg",
	10: "../alts/Asset13.svg",
};

const Loading = ({ width, height }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % Object.keys(Images).length
			);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const currentImage = Object.values(Images)[currentImageIndex];

	return (
		<div
			style={{
				width: width,
				height: height,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img src={currentImage} alt="Loading" />
		</div>
	);
};

export default Loading;
