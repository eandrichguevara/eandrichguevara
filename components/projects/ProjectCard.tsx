import Image from "next/image";
import { TechBrand, techIcons } from "@/utils/icons";
import { Project } from "@/utils/projects";
import Tooltip from "../shared/TooltipCSS";
import Link from "next/link";

interface Props {
	project: Project;
	id: string;
}

export default function ProjectCard({
	project: {
		title,
		images,
		technologies,
		description,
		website: { name, url },
	},
	id,
}: Props) {
	return (
		<article
			id={id}
			className="my-8 w-full max-w-[160px] xs:max-w-[340px] flex flex-col gap-4 mx-auto"
		>
			<h3 className="text-3xl font-encode-sans text-white">{title}</h3>
			<Tooltip disabled={!url} content={`Ir a ${name}`}>
				<Link
					href={url || `#${id}`}
					target={url ? "_blank" : "_self"}
					className={`${url ? "" : "cursor-default"}`}
				>
					<div className="relative rounded-xl overflow-hidden shadow-lg group w-full max-w-[160px] xs:max-w-[340px] h-[160px] sm:h-[180px]">
						{images.map((image: string, index: number) => (
							<Image
								key={title + index}
								className={`absolute object-cover w-full max-w-[160px] xs:max-w-[340px] h-[160px] sm:h-[180px] transition-all duration-200 ${
									index === 1
										? "group-hover:opacity-0"
										: "group-hover:opacity-100"
								}`}
								src={image}
								width={340}
								height={180}
								alt={title}
							/>
						))}
					</div>
				</Link>
			</Tooltip>
			<div className="flex flex-wrap items-center gap-2 h-12 rounded-xl bg-sky-800 px-2 py-1 max-w-max">
				{technologies.map((technology: TechBrand) => (
					<Tooltip content={technology}>{techIcons[technology]}</Tooltip>
				))}
			</div>
			<p className="text-white text-sm w-full max-w-[160px] xs:max-w-[340px]">
				{description}
			</p>
		</article>
	);
}
