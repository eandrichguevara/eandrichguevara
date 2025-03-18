import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Background from "@/components/shared/Background";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Emilio Andrich - Software Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Amiko:wght@400;600;700&family=Encode+Sans+SC:wdth,wght@75,100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Background />
				<NavBar />
				<main className="py-4 px-8">{children}</main>
			</body>
		</html>
	);
}
