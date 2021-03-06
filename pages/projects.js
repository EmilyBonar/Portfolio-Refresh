import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header.js";
import projects from "../data/projectData.js";
import ProjectCard from "../components/ProjectCard.js";
import NavBar from "../components/NavBar.js";

function Projects() {
	const router = useRouter();
	const { query } = router.query;

	const [search, setSearch] = useState("");
	useEffect(() => {
		setSearch(query ? query : "");
	}, [query]);
	return (
		<div className="flex flex-col w-5/6 m-auto mb-4 max-w-7xl">
			<Header title="Emily Bonar - Projects" />
			<NavBar />
			<SearchBar
				initialValue={query ? query : ""}
				onInput={(input) => setSearch(input)}
			/>
			<main className="grid grid-flow-row-dense m-auto md:grid-cols-2 xl:grid-cols-3">
				<ProjectList projects={projects} search={search} />
			</main>
		</div>
	);
}

function ProjectList(props) {
	return props.projects
		.filter(
			(project) =>
				project.title.toLowerCase().includes(props.search) ||
				project.technologies.join(" ").toLowerCase().includes(props.search) ||
				project.copy.toLowerCase().includes(props.search),
		)
		.map((project, index) => (
			<ProjectCard project={project} index={index} key={index} />
		));
}

function SearchBar(props) {
	return (
		<input
			type="search"
			className="p-3 pl-4 my-4 text-xl rounded-full outline-none focus:ring-2 ring-gray-500"
			placeholder="Search..."
			onInput={(e) => props.onInput(e.target.value.toLowerCase())}
			defaultValue={props.initialValue}
		></input>
	);
}

export default Projects;
