import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Links from "@/components/links/Links";
import Contact from "@/components/contact/Contact";

export default function Home() {
	return (
		<div>
			<Hero />

			<Projects />

			<Links />

			<Contact />
		</div>
	);
}
