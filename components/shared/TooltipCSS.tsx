interface Props {
	children: React.ReactNode;
	content: React.ReactNode;
}

export default function Tooltip({ children, content }: Props) {
	return (
		<div className="relative group overflow-visible">
			<div className="absolute rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 -top-1/2 left-[30%] transition-all delay-100 bg-black text-white px-2 py-1 flex justify-center font-encode-sans-condensed shadow-md">
				{content}
			</div>
			{children}
		</div>
	);
}
