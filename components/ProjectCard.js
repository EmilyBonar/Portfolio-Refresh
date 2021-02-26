import React from "react";
import Logo from "./Logo";
import AnimatedCard from "./AnimatedCard";

export function ProjectCard(props) {
	return (
		<AnimatedCard
			content={
				<div className="flex flex-col min-h-full pb-8 m-auto overflow-hidden bg-white rounded shadow-lg">
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
							<Logo
								icon="/icon-link.svg"
								link={props.liveLink}
								name="live site"
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
			}
			index={props.index}
		/>
	);
}

export default ProjectCard;