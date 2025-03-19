import { TechBrand } from "./icons";

export interface Project {
	title: string;
	images: string[];
	technologies: TechBrand[];
	description: string;
	website: {
		name?: string;
		url?: string;
	};
}

export const projects: Project[] = [
	{
		title: "CLM Blog + website",
		images: ["/images/projects/clmds-blog.png", "/images/projects/clmds.png"],
		technologies: ["NextJS", "TailwindCSS", "TypeScript"],
		description:
			"Participé en todas las etapas de desarrollo de este proyecto realizando propuestas de las tecnologías a usar, aportando en nuevas caracteristicas y la manera en la que se podian desarrollar",
		website: {
			name: "CLM website",
			url: "https://clmds.com",
		},
	},

	{
		title: "Yagán App + website",
		images: ["/images/projects/yagan-app.png", "/images/projects/yagan.png"],
		technologies: ["NextJS", "Keycloak", "Node", "TailwindCSS", "TypeScript"],
		description:
			"Este es el proyecto mas completo en el que he trabajado como unico desarrollador. Es un monolito que crea usuarios de distintas servicios y los conecta con una cuenta de Keycloak. Ademas de un sitio web para la plataforma.",
		website: {
			name: "Yagán website",
			url: "https://yagan.cloud",
		},
	},

	{
		title: "Workmate",
		images: ["/images/projects/workmate.png"],
		technologies: ["Angular", "PrimeNG", "TypeScript"],
		description:
			"Participé en un proyecto de 6 meses que requeria agregar nuevas funcionalidades y modulos a una app web ya existente.",
		website: {},
	},
];
