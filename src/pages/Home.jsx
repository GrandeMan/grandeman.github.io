import Typist from "react-typist-component";

import { useDarkMode } from "../handlers/DarkModeHandler";

export default function Home() {
	const { darkMode } = useDarkMode();

	return (
		<div
			className={`${
				darkMode ? "bg-stone-950" : "bg-white"
			} w-full h-full pt-24 pb-4 flex flex-col justify-between`}
		>
			<div className="flex flex-col px-6 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							<span className="block xl:inline">
								<span
									className={darkMode ? "text-orange-50" : ""}
								>
									Hi, I&rsquo;m Joshua,
								</span>
								<span className={"text-orange-600"}>
									<Typist
										typingDelay={100}
										loop={true}
										cursor={
											<span className="font-thin">|</span>
										}
									>
										&nbsp;a graphic designer.
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={17} />
										<Typist.Delay ms={200} />
										web developer.
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={14} />
										<Typist.Delay ms={200} />
										arti
										<Typist.Delay ms={400} />
										<Typist.Backspace count={5} />
										<Typist.Delay ms={200} />
										n artist.
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={10} />
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
								<img
									className={`${
										darkMode ? "invert opacity-50 " : ""
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
