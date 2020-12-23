import React from "react";
import Head from "next/head";
import projects from "../data/data.js";
import ProjectCard from "../components/ProjectCard.js";

const Projects = () => (
	<div className="flex flex-col gap-4 mb-4">
		<div className="flex w-5/6 lg:w-3/4 m-auto gap-8 text-xl text-gray-900 mt-8">
			<a href="./">Home</a>
			<a href="./projects">Projects</a>
		</div>
		<div className="grid grid-flow-row-dense lg:grid-cols-3 gap-4 w-5/6 lg:w-3/4 m-auto">
			{projects.map((project) => (
				<ProjectCard
					title={project.title}
					media={project.media}
					copy={project.copy}
					gitLink={project.gitLink}
					liveLink={project.liveLink}
				/>
			))}
		</div>
	</div>
);

export default Projects;
