import SectionTitle from "@/components/shared/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { Project, projects } from "@/utils/projects";

export default function Projects() {
	return (
		<section id="projects" className="mt-48 max-w-7xl mx-auto">
			<SectionTitle title={"Proyectos"} />

			<div className="auto-grid mt-8 w-full bg-sky-600 rounded-[70px] px-8 py-12">
				{projects.map((project: Project, index: number) => (
					<ProjectCard
						key={project.title + index}
						project={project}
						id={"project_" + index}
					/>
				))}
			</div>
		</section>
	);
}
