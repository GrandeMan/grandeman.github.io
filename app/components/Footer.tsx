"use client";

import useTheme from "../handlers/ThemeHandler";

export default function Footer() {
	const { theme } = useTheme();
	return (
		<footer
			className={`w-full py-4 flex flex-col items-center ${
				theme === "dark" ? "bg-stone-950" : "bg-orange-500"
			}`}
		>
			<p className={theme === "dark" ? "text-gray-700" : "text-gray-900"}>
				© 2024 Joshua Morales
			</p>
		</footer>
	);
}
