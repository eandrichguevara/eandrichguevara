import Name from "@/components/shared/Name";
import { TooltipClient as Tooltip } from "@/components/shared/TooltipCSS";
import {
	Github,
	HTML,
	LinkedIn,
	CSS,
	JavaScript,
	ReactIcon,
	TypeScript,
	NextJS,
	TailwindCSS,
	Node,
} from "@/utils/icons";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="max-w-7xl mx-auto">
			<section className="mt-48">
				<div className="flex flex-wrap gap-4 items-center">
					<Name className="text-3xl" />
					<div className="flex flex-wrap gap-4 items-center">
						<Link
							href={"https://www.linkedin.com/in/emilio-andrich-guevara/"}
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedIn className="w-8 h-8" />
						</Link>
						<Link
							href={"https://github.com/eandrichguevara"}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="w-8 h-8" />
						</Link>
					</div>
				</div>
				<h1 className="mt-4 md:mt-0 leading-snug text-[2.3rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-encode-sans">
					Desarrollador <span className="text-nowrap">Fullstack</span>
				</h1>
				<p className="mt-8 w-3/4 max-w-[760px]">
					Desarrollador apasionado por construir productos digitales eficientes
					y escalables. Me especializo en llevar proyectos desde la idea hasta
					el despliegue, combinando diseño, código y servicios en la nube para
					crear soluciones que realmente funcionan.
				</p>
			</section>

			<section className="mt-32 flex flex-wrap justify-evenly items-center gap-12 px-16">
				<Tooltip content="HTML">
					<HTML className="w-16 h-16" />
				</Tooltip>
				<Tooltip content="CSS">
					<CSS className="w-16 h-16" />
				</Tooltip>
				<Tooltip content="JavaScript">
					<JavaScript className="w-16 h-16" />
				</Tooltip>
				<Tooltip content="React">
					<ReactIcon className="w-16 h-16" />
				</Tooltip>
				<Tooltip content="Node">
					<Node className="w-16 h-16" />
				</Tooltip>
				<Tooltip content="TypeScript">
					<TypeScript className="w-16 h-16" />
				</Tooltip>
				<Tooltip content="NextJS">
					<NextJS className="w-16 h-16" />
				</Tooltip>
				<Tooltip content="TailwindCSS">
					<TailwindCSS className="w-16 h-16" />
				</Tooltip>
			</section>
		</div>
	);
}
