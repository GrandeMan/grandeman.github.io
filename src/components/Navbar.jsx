import { Link, Outlet } from "react-router-dom";
import { useDarkMode } from "../handlers/DarkModeHandler";
import ToggleDark from "./ToggleDark";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { darkMode, _ } = useDarkMode();
	return (
		<>
			<header>
				<nav
					className={`${
						darkMode ? "bg-stone-950" : "bg-white"
					} flex items-center justify-between p-6 z-10 top-0 absolute w-full h-20 bg-opacity-20 backdrop-blur-sm drop-shadow-md`}
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
				</nav>
				<Dialog
					as="div"
					className="hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-50" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>
			<main className="h-full">
				<Outlet />
			</main>
		</>
	);
}
