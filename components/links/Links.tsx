import SectionTitle from "@/components/shared/SectionTitle";
import { Github, LinkedIn } from "@/utils/icons";
import Link from "next/link";

export default function Links() {
	return (
		<section id="links" className="mt-48 max-w-7xl mx-auto">
			<SectionTitle title={"Links"} />

			<div className="mt-8 flex justify-center gap-8">
				<Link
					href={"https://www.linkedin.com/in/emilio-andrich-guevara/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedIn className="w-12 h-12 hover:scale-110 transition-transform" />
				</Link>
				<Link
					href={"https://github.com/eandrichguevara"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github className="w-12 h-12 hover:scale-110 transition-transform" />
				</Link>
			</div>
		</section>
	);
}
