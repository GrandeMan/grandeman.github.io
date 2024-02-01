import { useDarkMode } from "../handlers/DarkModeHandler";

export default function Footer() {
	const { darkMode } = useDarkMode();
	return (
		<footer
			className={`w-full py-2 flex flex-col items-center ${
				darkMode ? "bg-stone-950" : "bg-white"
			}`}
		>
			<hr className={`w-4/5 pb-6 border-orange-500 shadow-sm`} />
			<p className={darkMode ? "text-gray-700" : "text-gray-900"}>
				© 2024 Joshua Morales
			</p>
		</footer>
	);
}
