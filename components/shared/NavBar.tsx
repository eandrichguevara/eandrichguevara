import Link from "next/link";
import Name from "./Name";

export default function NavBar() {
	return (
		<nav className="flex gap-8 justify-center lg:justify-between items-center font-encode-sans py-4 px-6 max-w-7xl mx-auto">
			<Name className="text-xl text-transparent hidden lg:block" />

			<ul className="flex gap-8 lg:gap-16 lg:flex-row flex-col justify-between items-center lg:mr-80 mt-12 lg:mt-0">
				<li>
					<Link
						className="text-white bg-sky-600 lg:text-black lg:bg-transparent"
						href="#projects"
					>
						Proyectos
					</Link>
				</li>
				<li>
					<Link className="text-white bg-sky-600" href="#links">
						Links
					</Link>
				</li>
				<li>
					<Link className="text-white bg-sky-600" href="#contact">
						Contacto
					</Link>
				</li>
			</ul>
		</nav>
	);
}
