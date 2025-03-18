import Name from "./Name";

export default function NavBar() {
	return (
		<nav className="flex gap-8 justify-between items-center font-encode-sans py-4 px-6">
			<Name className="text-transparent" />

			<ul className="flex gap-8 lg:gap-16 lg:flex-row flex-col justify-between items-center mr-80">
				<li>
					<a className="text-white lg:text-black" href="">
						Proyectos
					</a>
				</li>
				<li>
					<a className="text-white" href="">
						Links
					</a>
				</li>
				<li>
					<a className="text-white" href="">
						Contacto
					</a>
				</li>
			</ul>
		</nav>
	);
}
