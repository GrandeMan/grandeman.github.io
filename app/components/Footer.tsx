"use client";

import { useTheme } from "../handlers/ThemeHandler";

export default function Footer() {
	const { theme } = useTheme();
	return (
		<footer
			className={`w-full py-2 flex flex-col items-center ${
				theme === "dark" ? "bg-stone-950" : "bg-white"
			}`}
		>
			<hr className={`w-4/5 pb-6 border-orange-500 shadow-sm`} />
			<p className={theme === "dark" ? "text-gray-700" : "text-gray-900"}>
				© 2024 Joshua Morales
			</p>
		</footer>
	);
}
