import CSS from "@/components/icons/CSS";
import Github from "@/components/icons/Github";
import HTML from "@/components/icons/HTML";
import JavaScript from "@/components/icons/Javascript";
import LinkedIn from "@/components/icons/LinkedIn";
import NextJS from "@/components/icons/NextJS";
import Node from "@/components/icons/Node";
import ReactIcon from "@/components/icons/React";
import TailwindCSS from "@/components/icons/TailwindCSS";
import TypeScript from "@/components/icons/TypeScript";
import Keycloak from "@/components/icons/Keycloak";
import Angular from "@/components/icons/Angular";
import PrimeNG from "@/components/icons/PrimeNG";

export type TechBrand =
	| "HTML"
	| "CSS"
	| "JavaScript"
	| "NextJS"
	| "TailwindCSS"
	| "React"
	| "Node"
	| "TypeScript"
	| "Github"
	| "LinkedIn"
	| "Keycloak"
	| "Angular"
	| "PrimeNG";

export type TechIconsMap = {
	[key in TechBrand]: React.ReactElement;
};

export const techIcons: TechIconsMap = {
	HTML: <HTML className="w-8 h-8" />,
	CSS: <CSS className="w-8 h-8" />,
	JavaScript: <JavaScript className="w-8 h-8" />,
	NextJS: <NextJS className="w-8 h-8" />,
	TailwindCSS: <TailwindCSS className="w-8 h-8" />,
	React: <ReactIcon className="w-8 h-8" />,
	Node: <Node className="w-8 h-8" />,
	TypeScript: <TypeScript className="w-8 h-8" />,
	Github: <Github className="w-8 h-8" />,
	LinkedIn: <LinkedIn className="w-8 h-8" />,
	Keycloak: <Keycloak className="w-8 h-8" />,
	Angular: <Angular className="w-8 h-8" />,
	PrimeNG: <PrimeNG className="w-8 h-8" />,
};

export {
	HTML,
	CSS,
	JavaScript,
	NextJS,
	TailwindCSS,
	ReactIcon,
	Node,
	TypeScript,
	Github,
	LinkedIn,
	Keycloak,
	Angular,
	PrimeNG,
};
