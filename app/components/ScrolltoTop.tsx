import React, { useEffect, useState } from "react";
import useTheme from "../handlers/ThemeHandler";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

const ScrollToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { theme } = useTheme();
	const toggleVisibility = () => {
		if (window.scrollY > 20) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`${isVisible ? " block" : "hidden"} ${
				theme === "dark"
					? "bg-slate-500 text-orange-500 "
					: "bg-slate-300 text-slate-900 "
			} fixed bottom-5 right-7 z-50 border-none outline-none  cursor-pointer p-4 rounded-full text-2xl transition-all duration-300 ease-in-out bg-opacity-20 backdrop-blur-sm drop-shadow-md `}
			title="Go to top"
		>
			<ArrowUpIcon className="w-6 h-6" />
		</button>
	);
};

export default ScrollToTopButton;
