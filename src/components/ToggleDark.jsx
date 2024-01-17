// Note: Toggle Dark Mode
import { Switch } from "@headlessui/react";
import { useDarkMode } from "../handlers/DarkModeHandler";

export default function ToggleDark() {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<div>
			<Switch
				checked={darkMode}
				onChange={toggleDarkMode}
				className={`${darkMode ? "bg-orange-950" : "bg-orange-600"}
          relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
			>
				<span className="sr-only">Toggle dark mode</span>
				<span
					aria-hidden="true"
					className={`${darkMode ? "translate-x-6" : "translate-x-0"}
             pointer-events-none inline-block h-[24px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
				/>
			</Switch>
		</div>
	);
}
