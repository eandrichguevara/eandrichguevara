interface Props {
	className?: string;
}

export default function Name({ className }: Props) {
	return (
		<span className={`font-encode-sans ${className}`}>Emilio Andrich</span>
	);
}
