"use client";

import Typist from "react-typist-component";

import useTheme from "./handlers/ThemeHandler";
import Image from "next/image";
import { useEffect } from "react";
import ScrollToTopButton from "./components/ScrolltoTop";

export default function Home() {
	const { theme } = useTheme();

	// useEffect(() => {
	// 	(async () => {
	// 		const LocomotiveScroll = (await import("locomotive-scroll"))
	// 			.default;
	// 		const locomotiveScroll = new LocomotiveScroll();
	// 	})();
	// }, []);

	return (
		<div
			className={`${
				theme === "dark" ? "bg-stone-950" : "bg-white"
			} w-full pt-24 pb-4 flex flex-col justify-between`}
		>
			<div className="h-screen flex flex-col px-6 lg:px-8 justify-center">
				<div className="mx-auto w-4/5">
					<div className="text-center ">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							<span className="block xl:inline">
								<span
									className={
										theme === "dark" ? "text-orange-50" : ""
									}
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
			<div className="flex flex-col px-6 lg:px-8 h-screen justify-center">
				<div className="mx-auto w-4/5">
					<div className="text-center mt-12">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							<span className="block xl:inline">
								<span
									className={
										theme === "dark" ? "text-orange-50" : ""
									}
								>
									What I Do
								</span>
							</span>
						</h2>
						<p
							className={`mt-6 text-lg leading-8 ${
								theme === "dark"
									? "text-gray-500"
									: "text-gray-600"
							}`}
						>
							I&rsquo;m a graphic designer and web developer with
							a passion for creating beautiful, functional
							designs. Whether it&rsquo;s a logo, a website, or a
							piece of art, I strive to create something that is
							both visually appealing and user-friendly.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col px-6 lg:px-8 h-screen justify-center">
				<div className="mx-auto w-4/5">
					<div className="text-center mt-12">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							<span className="block xl:inline">
								<span
									className={
										theme === "dark" ? "text-orange-50" : ""
									}
								>
									What I Use
								</span>
							</span>
						</h2>
						<p
							className={`mt-6 text-lg leading-8 ${
								theme === "dark"
									? "text-gray-500"
									: "text-gray-600"
							}`}
						>
							I use a variety of tools and technologies to bring
							my designs to life. From Adobe Creative Suite to
							React.js, I&rsquo;m always learning new things and
							experimenting with different techniques to create
							something unique.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col px-6 lg:px-8 h-screen justify-center">
				<div className="mx-auto w-4/5">
					<div className="text-center mt-12">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							<span className="block xl:inline">
								<span
									className={
										theme === "dark" ? "text-orange-50" : ""
									}
								>
									Testimonials
								</span>
							</span>
						</h2>
						<p
							className={`mt-6 text-lg leading-8 ${
								theme === "dark"
									? "text-gray-500"
									: "text-gray-600"
							}`}
						>
							Here&rsquo;s what some of my clients have to say
							about my work:
						</p>
					</div>
				</div>
				<div className="flex flex-col px-6 lg:px-8 h-screen justify-center">
					<div className="mx-auto w-4/5">
						<div className="text-center mt-12">
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
								<span className="block xl:inline">
									<span
										className={
											theme === "dark"
												? "text-orange-50"
												: ""
										}
									>
										Contact Me
									</span>
								</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<ScrollToTopButton />
		</div>
	);
}
// Todo: Add tech stack and testimonials to home page
