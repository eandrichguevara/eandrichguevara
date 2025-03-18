import bgTexture from "../../public/watercolor-paper-texture.webp";

export default function Background() {
	return (
		<div className="absolute -z-10 w-full h-full overflow-hidden">
			<div
				style={{ backgroundImage: `url(${bgTexture.src})` }}
				className="bg-texture absolute top-0 left-0 w-full h-full opacity-40"
			></div>
			<div className="absolute -top-32 right-[max(calc(((100vw-1280px)/2)-160px),-80px)] w-[700px] h-[500px] bg-sky-600 rotate-[20deg] rounded-[70px]"></div>
		</div>
	);
}
