"use client";

import Image from "next/image";
import useTheme from "../handlers/ThemeHandler";

export default function About() {
	const { theme } = useTheme();
	return (
		<div className="w-full h-full pt-24 pb-4 flex flex-col justify-between">
			<div className="flex flex-col px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-extrabold text-orange-600 sm:text-4xl">
							About me
						</h2>
						<p
							className={`mt-6 text-lg leading-8 ${
								theme === "dark"
									? "text-gray-500"
									: "text-gray-600"
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
								<Image
									className={`${
										theme === "dark"
											? "invert opacity-50"
											: ""
									}`}
									width={40}
									height={40}
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
								<Image
									className={`${
										theme === "dark"
											? "invert opacity-50 "
											: ""
									}`}
									width={90}
									height={90}
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
