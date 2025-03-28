"use client";
import { useMediaQuery } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";

interface Props {
	children: React.ReactNode;
	content: React.ReactNode;
	disabled?: boolean;
}

export const TooltipClient = dynamic(
	() => import("@/components/shared/TooltipCSS"),
	{
		ssr: false,
	}
);

export default function Tooltip({
	children,
	content,
	disabled = false,
}: Props) {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	return (
		<div className={`relative group overflow-visible`}>
			<div
				className={`absolute rounded-lg opacity-0 group-hover:z-50 group-hover:opacity-100 group-hover:-translate-y-9 top-0 left-[30%] transition-all delay-100 bg-black text-white px-2 py-1 flex justify-center font-encode-sans-condensed shadow-md ${
					disabled ? "hidden" : ""
				} ${isSmallDevice ? "hidden" : ""}`}
			>
				{content}
			</div>
			{children}
		</div>
	);
}
