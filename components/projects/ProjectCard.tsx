import Image from "next/image";
import { TechBrand, techIcons } from "@/utils/icons";
import { Project } from "@/utils/projects";
import { TooltipClient as Tooltip } from "@/components/shared/TooltipCSS";
import Link from "next/link";
import LinkIcon from "@/components/icons/Link";

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
		<article id={id} className="my-8 flex flex-col gap-4 mx-auto">
			<h3 className="text-3xl font-encode-sans text-white">{title}</h3>
			<Tooltip disabled={!url} content={`Ir a ${name}`}>
				<Link
					href={url || `#${id}`}
					target={url ? "_blank" : "_self"}
					className={`${url ? "group" : "cursor-default pointer-events-none"}`}
					rel="noopener noreferrer"
				>
					<div className="relative rounded-xl overflow-hidden shadow-lg group">
						{images.map((image: string, index: number) => (
							<Image
								key={title + index}
								className={`${
									index === 0 ? "" : "absolute"
								} min-h-32 w-[340px] h-[180px] object-cover transition-all duration-200 ${
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
						<LinkIcon
							className={`absolute top-2 right-2 text-white transition-all ${
								url ? "group-hover:scale-125" : "hidden"
							}`}
						/>
					</div>
				</Link>
			</Tooltip>
			<div className="flex flex-wrap justify-start items-center gap-2 rounded-xl bg-sky-800 px-3 py-1">
				{technologies.map((technology: TechBrand, index: number) => (
					<Tooltip key={"tech_" + index} content={technology}>
						{techIcons[technology]}
					</Tooltip>
				))}
			</div>
			<p className="text-white text-sm">{description}</p>
		</article>
	);
}
