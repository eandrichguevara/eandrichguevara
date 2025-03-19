interface Props {
	title: string;
}

export default function SectionTitle({ title }: Props) {
	return <h2 className="text-4xl font-encode-sans leading-relaxed">{title}</h2>;
}
