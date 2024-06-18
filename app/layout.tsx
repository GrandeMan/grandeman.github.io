import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { DarkModeProvider } from "./handlers/DarkModeHandler";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const geist = GeistSans;

export const metadata: Metadata = {
	title: "Joshua Morales: Designer + Developer",
	description: "Joshua Morales, graphic designer and web developer",
	keywords: "Joshua Morales, Graphic Design, Web Development, Frontend",
};

export const viewport: Viewport = {
	themeColor: "#ea580c",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="w-full h-full" lang="en">
			<head>
				<link rel="icon" type="image/svg+xml" href="/favicon.ico" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

				<script
					defer
					src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"
				></script>
				{/* // Single Page Apps for GitHub Pages
			// MIT License
			// https://github.com/rafgraph/spa-github-pages
			// This script checks to see if a redirect is present in the query string,
			// converts it back into the correct url and adds it to the
			// browser's history using window.history.replaceState(...),
			// which won't cause the browser to attempt to load the new url.
			// When the single page app is loaded further down in this file,
			// the correct url will be waiting in the browser's history for
			// the single page app to route accordingly. */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function (l) {
								if (l.search[1] === "/") {
									var decoded = l.search
										.slice(1)
										.split("&")
										.map(function (s) {
											return s.replace(/~and~/g, "&");
										})
										.join("?");
									window.history.replaceState(
										null,
										null,
										l.pathname.slice(0, -1) + decoded + l.hash
									);
								}
							})(window.location);
						`,
					}}
				></script>
				{/* //End Single Page Apps for GitHub Pages */}
			</head>
			<body className={`${geist.className} w-full h-full bg-orange-600`}>
				<div className="w-full h-full" id="root">
					<DarkModeProvider>
						<Navbar />
						{children}
						<Footer />
					</DarkModeProvider>
				</div>
			</body>
		</html>
	);
}
