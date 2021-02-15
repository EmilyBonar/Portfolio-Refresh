import React from "react";
import Header from "../components/Header.js";
import projects from "../data/projectData.js";
import ProjectCard from "../components/ProjectCard.js";
import NavBar from "../components/NavBar.js";

const Projects = () => (
	<div className="flex flex-col gap-4 mb-4">
		<Header title="Emily Bonar - Projects" />
		<NavBar />
		<div className="grid w-5/6 grid-flow-row-dense gap-4 m-auto md:grid-cols-2 xl:grid-cols-3 lg:w-3/4 max-w-7xl">
			{projects.map((project, index) => (
				<ProjectCard
					title={project.title}
					media={project.media}
					technologies={project.technologies}
					copy={project.copy}
					gitLink={project.gitLink}
					liveLink={project.liveLink}
					index={index}
				/>
			))}
		</div>
	</div>
);

export default Projects;
