import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import projects from "../data/projectData.ts";
import ProjectCard from "../components/ProjectCard.js";
import Page from "../components/Page.js";

function Projects() {
	const router = useRouter();
	const { query } = router.query;

	const [search, setSearch] = useState(query || "");
	const [filteredProjects, setFilteredProjects] = useState(projects);

	useEffect(() => {
		setFilteredProjects(
			projects.filter(
				(project) =>
					project.title.toLowerCase().includes(search.toLowerCase()) ||
					project.technologies.some((tech) =>
						tech.toLowerCase().includes(search.toLowerCase()),
					) ||
					project.copy.toLowerCase().includes(search.toLowerCase()),
			),
		);
	}, [search]);

	return (
		<Page title='Emily Bonar - Projects'>
			<SearchBar initialValue={query} onInput={(input) => setSearch(input)} />
			<ProjectList projects={filteredProjects} />
		</Page>
	);
}

function ProjectList(props) {
	return (
		<div className='grid grid-flow-row-dense m-auto md:grid-cols-2 xl:grid-cols-3'>
			{props.projects.map((project, index) => (
				<ProjectCard project={project} index={index} key={index} />
			))}
		</div>
	);
}

function SearchBar(props) {
	return (
		<input
			type='search'
			className='w-full p-3 pl-4 mb-4 text-xl rounded-full outline-none focus:ring-2 ring-gray-500'
			placeholder='Search...'
			onInput={(e) => props.onInput(e.target.value.toLowerCase())}
			defaultValue={props.initialValue}
		></input>
	);
}

export default Projects;
