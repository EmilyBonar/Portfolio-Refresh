import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";

export function ProjectCard(props) {
	const [fade, setFade] = useState("opacity-0 translate-y-48");
	useEffect(() => {
		setFade("opacity-90 translate-y-0");
	}, []);
	return (
		<div
			className={`m-auto bg-white rounded shadow-lg overflow-hidden pb-8 flex flex-col min-h-full transform-gpu ${fade} duration-1000 transition`}
			style={{ transitionDelay: 100 * props.index + "ms" }}
		>
			<img
				src={props.media}
				className="object-cover object-top w-full h-64"
				alt={`Hero image for ${props.title}`}
				width="256"
			/>
			<h1 className="px-8 pt-4 text-2xl font-bold tracking-wide text-gray-900">
				{props.title}
			</h1>
			<p className="px-8 pt-1 text-xs tracking-widest text-gray-600 uppercase">
				{props.technologies}
			</p>
			<div className="px-8 pt-2 text-gray-900">{props.copy}</div>
			<div className="flex m-auto mt-4">
				{props.liveLink && (
					<Logo icon="/icon-link.svg" link={props.liveLink} name="live site" />
				)}
				{props.gitLink && (
					<Logo icon="/GitHub-Mark.svg" link={props.gitLink} name="GitHub" />
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
