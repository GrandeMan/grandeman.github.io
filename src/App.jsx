import InfiniteScroll from "./components/InfScroll";
import Loading from "./components/Loading";
import "./index.css";
import Home from "./pages/Home";

function App() {
	// return (
	<div className="bg-gradient-to-tr from-orange-600 to-red-600 w-full h-full flex flex-col justify-between items-center">
		<InfiniteScroll />
		<div className="flex flex-col gap-8 px-4 justify-center items-center">
			{/* <img
					width={60}
					height={60}
					className="animate-bounce "
					src="../11_icon.svg"
					alt="Under Construction"
				/> */}
			<div className=" animate-bounce">
				<Loading width={75} height={75} />
			</div>
			<h1 className="text-xl text-center font-normal">
				<span className="text-3xl font-bold">Hi!</span>
				<br /> I&rsquo;m working on changes to my site, but you can
				still check out my work at the links below!
			</h1>
			<hr className="w-3/4 border-neutral-800 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] " />

			<div className="flex gap-8 items-center">
				<a
					href="https://github.com/GrandeMan"
					className="hover:opacity-75 transition-opacity duration-300"
				>
					<img
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
						width={100}
						height={100}
						src="../behance.svg"
						alt="Behance"
					/>
				</a>
			</div>
			<hr className="w-3/4 border-neutral-800 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] " />
			<h1 className="text-xl text-center font-normal">
				Or you can email me{" "}
				<a
					href="mailto:hello@joshuamorales.tech"
					className="font-bold hover:underline"
				>
					here
				</a>{" "}
				to get in touch!
			</h1>
		</div>
		<InfiniteScroll />
	</div>;
	// );
	return <Home />;
}

export default App;
