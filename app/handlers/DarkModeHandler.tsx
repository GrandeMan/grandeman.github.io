"use client";

import { createContext, useContext, useState } from "react";

type DarkModeContextType = {
	darkMode: boolean;
	toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

import { ReactNode } from "react";

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => {
	const context = useContext(DarkModeContext);

	if (!context) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}

	return context;
};
