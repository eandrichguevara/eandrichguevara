import { TechBrand } from "./icons";
import clmBlogImage from "@/public/images/projects/clmds-blog.png";
import clmImage from "@/public/images/projects/clmds.png";
import yaganAppImage from "@/public/images/projects/yagan-app.png";
import yaganImage from "@/public/images/projects/yagan.png";
import workmateImage from "@/public/images/projects/workmate.png";

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
		images: [clmBlogImage.src, clmImage.src],
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
		images: [yaganAppImage.src, yaganImage.src],
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
		images: [workmateImage.src],
		technologies: ["Angular", "PrimeNG", "TypeScript"],
		description:
			"Participé en un proyecto de 6 meses que requeria agregar nuevas funcionalidades y modulos a una app web ya existente.",
		website: {},
	},
];
