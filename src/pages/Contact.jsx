import { Link } from "react-router-dom";
import ToggleDark from "../components/ToggleDark";
import { useState } from "react";
import { useDarkMode } from "../handlers/DarkModeHandler";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Contact", href: "/contact" },
];

export default function Contact() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<div
			className={`${
				darkMode ? "bg-stone-950" : "bg-white"
			} w-full h-full flex flex-col justify-between`}
		>
			<header>
				<nav
					className="flex items-center justify-between p-6"
					aria-label="Global"
				>
					<div>
						<Link to="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Joshua Morales</span>
							<img
								className={`h-8 w-auto ${
									darkMode ? "dm-orange" : ""
								}`}
								src="./11_icon.svg"
								alt="Joshua Morales logo"
							/>
						</Link>
					</div>
					{/* <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div> */}
					{/* <div className="hidden lg:flex lg:gap-x-12"> */}
					<div className="flex gap-4 ">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={`text-lg font-bold leading-6 ${
									darkMode
										? "text-orange-50"
										: "text-gray-900"
								} hover:text-orange-600 transition-colors duration-300`}
							>
								{item.name}
							</Link>
						))}
					</div>
					<ToggleDark />
					{/* </div> */}
				</nav>
			</header>
			<main className="flex-grow">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-extrabold text-gray-900 dark:text-orange-50 sm:text-4xl">
							Get in touch
						</h2>
						<p className="mt-4 text-lg text-gray-500 dark:text-orange-100">
							Send me a message and I'll get back to you as soon
							as possible.
						</p>
					</div>
					<div className="mt-8">
						<form
							action="#"
							className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<div>
								<label
									htmlFor="first_name"
									className="block text-sm font-medium text-gray-700 dark:text-orange-50"
								>
									First name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="first_name"
										id="first_name"
										autoComplete="given-name"
										className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 dark:bg-stone-900 dark:text-orange-50 dark:border-orange-500 rounded-md"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last_name"
									className="block text-sm font-medium text-gray-700 dark:text-orange-50"
								>
									Last name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="last_name"
										id="last_name"
										autoComplete="family-name"
										className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 dark:bg-stone-900 dark:text-orange-50 dark:border-orange-500 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 dark:text-orange-50"
								>
									Email
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 dark:bg-stone-900 dark:text-orange-50 dark:border-orange-500 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700 dark:text-orange-50"
								>
									Subject
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="subject"
										id="subject"
										className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 dark:bg-stone-900 dark:text-orange-50 dark:border-orange-500 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-orange-50"
									>
										Message
									</label>
									<span
										id="message-max"
										className="text-sm text-gray-500 dark:text-orange-100"
									>
										Max. 500 characters
									</span>
								</div>
								<div className="mt-1">
									<textarea
										id="message"
										name="message"
										rows={4}
										className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border border-gray-300 dark:bg-stone-900 dark:text-orange-50 dark:border-orange-500 rounded-md"
										aria-describedby="message-max"
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="sm:col-span-2 sm:flex sm:justify-end">
								<button
									type="submit"
									className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:w-auto"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
			<footer className="flex items-center justify-center w-full py-2">
				<p className={darkMode ? "text-gray-700" : "text-gray-900"}>
					© 2024 Joshua Morales
				</p>
			</footer>
		</div>
	);
}
