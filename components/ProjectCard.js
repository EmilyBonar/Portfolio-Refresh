import React from "react";
import Logo from "./Logo";
import AnimatedCard from "./AnimatedCard";

export function ProjectCard(props) {
	return (
		<AnimatedCard
			content={
				<div className="flex flex-col h-full min-h-full pb-8 m-auto overflow-hidden transition transform bg-white rounded-lg shadow-lg hover:-translate-y-2">
					<a href={props.liveLink} target="_blank">
						<img
							src={props.media}
							className="object-cover object-top w-full h-64"
							alt={`Hero image for ${props.title}`}
							width="256"
						/>
					</a>
					<div className="flex flex-col h-1/2">
						<h2 className="px-8 pt-4 text-2xl font-bold tracking-wide text-gray-900">
							{props.title}
						</h2>
						<p className="px-8 pt-1 text-xs tracking-widest text-gray-600 uppercase">
							{props.technologies.join(" | ")}
						</p>
						<div className="h-full px-8 pt-2 text-gray-900">{props.copy}</div>
						<div className="flex m-auto mt-4">
							{props.liveLink && (
								<Logo
									icon="/external-link.svg"
									link={props.liveLink}
									name="Live Site"
								/>
							)}
							{props.gitLink && (
								<Logo
									icon="/GitHub-Mark.svg"
									link={props.gitLink}
									name="GitHub"
								/>
							)}
						</div>
					</div>
				</div>
			}
			index={props.index}
		/>
	);
}

export default ProjectCard;
