import Name from "@/components/shared/Name";
import LinkedIn from "@/components/icons/LinkedIn";
import Github from "@/components/icons/Github";

export default function Hero() {
	return (
		<div>
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
				<p className="mt-8 w-3/4">
					Soy un desarrollador de soluciones tecnológicas, destacándome por mi
					rápida capacidad de aprendizaje y adaptabilidad. En mi portafolio
					personal, encontrarás proyectos que reflejan mi compromiso con la
					calidad, eficiencia y colaboración en equipo. Me especializo en crear
					soluciones innovadoras, combinando habilidades técnicas y blandas para
					impulsar el éxito de cada proyecto.
				</p>
			</section>

			<section className="mt-36 flex flex-wrap justify-evenly gap-8 px-16">
				<span>HTML</span>
				<span>CSS</span>
				<span>JS</span>
				<span>React</span>
				<span>Tailwind</span>
			</section>
		</div>
	);
}
