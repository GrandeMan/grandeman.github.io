import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Typist from "react-typist-component";
import ToggleDark from "../components/ToggleDark";
import { useDarkMode } from "../handlers/DarkModeHandler";

const navigation = [
	{ name: "Home", href: "#" },
	{ name: "Contact", href: "#" },
];

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<div
			className={`${
				darkMode ? "bg-stone-950" : "bg-white"
			} w-full h-full`}
		>
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					className="flex items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Joshua Morales</span>
							<img
								className={`h-8 w-auto ${
									darkMode ? "dm-orange" : ""
								}`}
								src="./11_icon.svg"
								alt="Joshua Morales logo"
							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						{/* <button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button> */}
					</div>
					{/* <div className="hidden lg:flex lg:gap-x-12"> */}
					<div className="flex space-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								{item.name}
							</a>
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

			<div className="flex flex-col px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							<span className="block xl:inline">
								<span
									className={darkMode ? "text-orange-50" : ""}
								>
									Hi, I&rsquo;m Joshua
								</span>
								<span className={"text-orange-600"}>
									,
									<Typist
										typingDelay={100}
										loop={true}
										cursor={
											<span className="font-thin">|</span>
										}
									>
										&nbsp;a graphic designer
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={16} />
										<Typist.Delay ms={200} />
										web developer
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={13} />
										<Typist.Delay ms={200} />
										arti
										<Typist.Backspace count={5} />
										<Typist.Delay ms={200} />
										n artist
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={16} />
										<Typist.Delay ms={200} />
									</Typist>
								</span>
							</span>
						</h1>
						<p
							className={`mt-6 text-lg leading-8 ${
								darkMode ? "text-gray-500" : "text-gray-600"
							}`}
						>
							I&rsquo;m currently working on some changes, but you
							can still check out my work at the links below!
						</p>

						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="https://github.com/GrandeMan"
								className="hover:opacity-75 transition-opacity duration-300"
							>
								<img
									className={`${
										darkMode ? "invert opacity-50" : ""
									}`}
									width={50}
									height={50}
									src="../github-icon.svg"
									alt="GitHub"
								/>
							</a>
							{/* <a href="" className="text-2xl">
						<img
							width={50}
							height={50}
							src="../linkedin.svg"
							alt="LinkedIn"
						/>
					</a> */}
							<a
								href="https://www.behance.net/joshuajmorales__"
								className="hover:opacity-75 transition-opacity duration-300"
							>
								<img
									className={`${
										darkMode ? "invert opacity-50 " : ""
									}`}
									width={100}
									height={100}
									src="../behance.svg"
									alt="Behance"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
