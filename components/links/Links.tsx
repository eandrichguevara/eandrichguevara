import SectionTitle from "@/components/shared/SectionTitle";
import { Github, LinkedIn } from "@/utils/icons";
import Link from "next/link";

const links = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/emilio-andrich-guevara/",
		icon: LinkedIn,
		description: "Conecta conmigo profesionalmente",
	},
	{
		name: "GitHub",
		href: "https://github.com/eandrichguevara",
		icon: Github,
		description: "Explora mis proyectos y código",
	},
];

export default function Links() {
	return (
		<section id="links" className="mt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<SectionTitle title="Links" />

			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
				{links.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative overflow-hidden rounded-2xl bg-sky-600 p-6 transition-all duration-300 hover:bg-sky-800 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
					>
						<div className="relative flex items-center gap-4">
							<div className="flex-shrink-0 p-3 bg-white rounded-xl transition-all duration-300">
								<link.icon className="w-8 h-8" />
							</div>
							<div className="flex-1 min-w-0">
								<h3 className="text-xl font-encode-sans text-white font-semibold truncate">
									{link.name}
								</h3>
								<p className="text-sm text-white/80 mt-1 truncate">
									{link.description}
								</p>
							</div>
							<div className="flex-shrink-0">
								<svg
									className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
