import React from "react";
import Header from "../components/Header.js";
import projects from "../data/data.js";
import ProjectCard from "../components/ProjectCard.js";
import NavBar from "../components/NavBar.js";

const Projects = () => (
	<div className="flex flex-col gap-4 mb-4">
		<Header title="Emily Bonar - Projects" />
		<NavBar />
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6 lg:w-3/4 m-auto">
			{projects.map((project) => (
				<ProjectCard
					title={project.title}
					media={project.media}
					technologies={project.technologies}
					copy={project.copy}
					gitLink={project.gitLink}
					liveLink={project.liveLink}
				/>
			))}
		</div>
	</div>
);

export default Projects;
