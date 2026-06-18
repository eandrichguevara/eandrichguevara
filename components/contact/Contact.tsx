import SectionTitle from "@/components/shared/SectionTitle";

export default function Contact() {
	return (
		<section id="contact" className="mt-48 mb-24 max-w-7xl mx-auto">
			<SectionTitle title={"Contacto"} />

			<div className="mt-8 flex flex-col items-center gap-4 text-white text-lg">
				<a
					href="mailto:eandrichguevara@gmail.com"
					className="hover:underline"
				>
					📧 eandrichguevara@gmail.com
				</a>
				<a href="tel:+56996320421" className="hover:underline">
					📱 +56 9 9632 0421
				</a>
				<span>📍 Viña del Mar, Chile</span>
			</div>
		</section>
	);
}
