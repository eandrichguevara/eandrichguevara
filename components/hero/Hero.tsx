import Name from "@/components/shared/Name";
import LinkedIn from "@/components/icons/LinkedIn";
import Github from "@/components/icons/Github";
import HTML from "@/components/icons/HTML";
import CSS from "@/components/icons/CSS";
import JavaScript from "@/components/icons/Javascript";
import NextJS from "@/components/icons/NextJS";
import TailwindCSS from "@/components/icons/TailwindCSS";
import React from "@/components/icons/React";
import Node from "@/components/icons/Node";
import TypeScript from "@/components/icons/TypeScript";
import Tooltip from "@/components/shared/TooltipCSS";

export default function Hero() {
	return (
		<div className="max-w-7xl mx-auto">
			<section className="mt-48">
				<div className="flex flex-wrap gap-4 items-center">
					<Name className="text-[2rem]" />
					<div className="flex flex-wrap gap-4 items-center">
						<a
							href={"https://www.linkedin.com/in/emilio-andrich-guevara/"}
							target="_blank"
						>
							<LinkedIn className="w-7 h-auto" />
						</a>
						<a href={"https://github.com/eandrichguevara"} target="_blank">
							<Github className="w-7 h-auto" />
						</a>
					</div>
				</div>
				<h1 className="leading-snug text-[4rem] font-encode-sans">
					Software Engineer
				</h1>
				<p className="mt-8 w-3/4 max-w-[760px]">
					Soy un desarrollador de soluciones tecnológicas, destacándome por mi
					rápida capacidad de aprendizaje y adaptabilidad. En mi portafolio
					personal, encontrarás proyectos que reflejan mi compromiso con la
					calidad, eficiencia y colaboración en equipo. Me especializo en crear
					soluciones innovadoras, combinando habilidades técnicas y blandas para
					impulsar el éxito de cada proyecto.
				</p>
			</section>

			<section className="mt-32 flex flex-wrap justify-evenly items-center gap-12 px-16">
				<Tooltip content="HTML">
					<HTML className="w-16 h-auto" />
				</Tooltip>
				<Tooltip content="CSS">
					<CSS className="w-16 h-auto" />
				</Tooltip>
				<Tooltip content="JavaScript">
					<JavaScript className="w-16 h-auto" />
				</Tooltip>
				<Tooltip content="React">
					<React className="w-16 h-auto" />
				</Tooltip>
				<Tooltip content="Node">
					<Node className="w-16 h-auto" />
				</Tooltip>
				<Tooltip content="TypeScript">
					<TypeScript className="w-16 h-auto" />
				</Tooltip>
				<Tooltip content="NextJS">
					<NextJS className="w-16 h-auto" />
				</Tooltip>
				<Tooltip content="TailwindCSS">
					<TailwindCSS className="w-16 h-auto" />
				</Tooltip>
			</section>
		</div>
	);
}
