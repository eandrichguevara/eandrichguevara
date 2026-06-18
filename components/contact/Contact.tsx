import SectionTitle from "@/components/shared/SectionTitle";

export default function Contact() {
	return (
		<section id="contact" className="mt-48 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<SectionTitle title="Contacto" />

			<div className="mt-12 max-w-2xl mx-auto">
				<div className="rounded-2xl bg-sky-600 p-8">
					<h3 className="text-2xl font-encode-sans text-white mb-2">
						¡Hablemos!
					</h3>
					<p className="text-white/80 text-sm mb-8">
						¿Tienes un proyecto en mente? No dudes en contactarme.
					</p>

					<div className="space-y-6">
						<a
							href="mailto:eandrichguevara@gmail.com"
							className="group flex items-center gap-4 p-3 -m-3 rounded-xl hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
						>
							<div className="flex-shrink-0 p-2 bg-white rounded-lg transition-colors duration-200">
								<svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm text-white/70">Email</p>
								<p className="text-white font-medium truncate group-hover:text-white/90 transition-colors duration-200">
									eandrichguevara@gmail.com
								</p>
							</div>
							<svg
								className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>

						<a
							href="tel:+56996320421"
							className="group flex items-center gap-4 p-3 -m-3 rounded-xl hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
						>
							<div className="flex-shrink-0 p-2 bg-white rounded-lg transition-colors duration-200">
								<svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm text-white/70">Teléfono</p>
								<p className="text-white font-medium truncate group-hover:text-white/90 transition-colors duration-200">
									+56 9 9632 0421
								</p>
							</div>
							<svg
								className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>

						<div className="flex items-center gap-4 p-3 -m-3">
							<div className="flex-shrink-0 p-2 bg-white rounded-lg">
								<svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm text-white/70">Ubicación</p>
								<p className="text-white font-medium">Viña del Mar, Chile</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
