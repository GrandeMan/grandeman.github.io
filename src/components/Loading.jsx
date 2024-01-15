import * as Images from "../../public/alt";

const Loading = (width, height) => {
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
			<div role="status"></div>
		</div>
	);
};
export default Loading;
