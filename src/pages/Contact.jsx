import { Link } from "react-router-dom";
import ToggleDark from "../components/ToggleDark";
import { useState } from "react";
import { useDarkMode } from "../handlers/DarkModeHandler";

export default function Contact() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<div
			className={`${
				darkMode ? "bg-stone-950" : "bg-white"
			} w-full h-full pt-24 pb-4 flex flex-col justify-between`}
		>
			<div
				className={`flex flex-col px-6 lg:px-8 ${
					darkMode ? "bg-stone-950" : "bg-white"
				} `}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h2
							className={`text-3xl font-extrabold
								text-orange-600
							sm:text-4xl`}
						>
							Get in touch
						</h2>
						<p
							className={`mt-4 text-lg ${
								darkMode ? "text-gray-500" : "text-gray-900"
							}`}
						>
							Send me a message and I&rsquo;ll get back to you as
							soon as possible.
						</p>
					</div>
					<div className="mt-8">
						<form
							method="POST"
							action="https://formspree.io/f/xqkrawag"
							className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<div>
								<label
									htmlFor="first_name"
									aria-required="true"
									className={`block text-sm font-medium ${
										darkMode
											? "text-orange-50"
											: "text-gray-900"
									}`}
								>
									First name
									<span className="text-orange-500">
										{" "}
										<span className="text-orange-500">
											{" "}
											*
										</span>
									</span>
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="first_name"
										id="first_name"
										autoComplete="given-name"
										required={true}
										className={`py-3 px-4 block w-full shadow-md focus:ring-orange-500 focus:border-orange-500 border-gray-300 ${
											darkMode
												? "bg-stone-900"
												: "bg-white"
										} dark:border-orange-500 rounded-md`}
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last_name"
									className={`block text-sm font-medium ${
										darkMode
											? "text-orange-50"
											: "text-gray-900"
									}`}
								>
									Last name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="last_name"
										id="last_name"
										autoComplete="family-name"
										className={`py-3 px-4 block w-full shadow-md focus:ring-orange-500 focus:border-orange-500 border-gray-300 ${
											darkMode
												? "bg-stone-900"
												: "bg-white"
										} dark:border-orange-500 rounded-md`}
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									aria-required="true"
									className={`block text-sm font-medium ${
										darkMode
											? "text-orange-50"
											: "text-gray-900"
									}`}
								>
									Email{" "}
									<span className="text-orange-500"> *</span>
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required={true}
										className={`py-3 px-4 block w-full shadow-md focus:ring-orange-500 focus:border-orange-500 border-gray-300 ${
											darkMode
												? "bg-stone-900"
												: "bg-white"
										} dark:border-orange-500 rounded-md`}
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="subject"
									className={`block text-sm font-medium ${
										darkMode
											? "text-orange-50"
											: "text-gray-900"
									}`}
								>
									Subject
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="subject"
										id="subject"
										className={`py-3 px-4 block w-full shadow-md focus:ring-orange-500 focus:border-orange-500 border-gray-300 ${
											darkMode
												? "bg-stone-900"
												: "bg-white"
										} dark:border-orange-500 rounded-md`}
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label
										aria-required="true"
										htmlFor="message"
										className={`block text-sm font-medium ${
											darkMode
												? "text-orange-50"
												: "text-gray-900"
										}`}
									>
										Message{" "}
										<span className="text-orange-500">
											{" "}
											*
										</span>
									</label>
									<span
										id="message-max"
										className={`text-sm font-light ${
											darkMode
												? "text-orange-50"
												: "text-gray-900"
										}`}
									>
										Max. 500 characters
									</span>
								</div>
								<div className="mt-1 ">
									<textarea
										id="message"
										name="message"
										maxLength={500}
										required={true}
										rows={10}
										className={`resize-none py-3 px-4 block w-full shadow-md focus:ring-orange-500 focus:border-orange-500 border border-gray-300 ${
											darkMode
												? "bg-stone-900"
												: "bg-white"
										} dark:border-orange-500 rounded-md`}
										aria-describedby="message-max"
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="sm:col-span-2 sm:flex sm:justify-end">
								<button
									type="submit"
									className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:w-auto"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
