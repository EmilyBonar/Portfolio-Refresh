import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header.js";
import projects from "../data/projectData.js";
import ProjectCard from "../components/ProjectCard.js";
import NavBar from "../components/NavBar.js";

function Projects() {
	const router = useRouter();
	const { skill } = router.query;

	const [search, setSearch] = useState("");
	useEffect(() => {
		setSearch(skill ? skill : "");
	}, [skill]);
	return (
		<div className="flex flex-col w-5/6 gap-4 m-auto mb-4 max-w-7xl lg:w-3/4">
			<Header title="Emily Bonar - Projects" />
			<NavBar />
			<SearchBar
				initialValue={skill ? skill : ""}
				onInput={(input) => setSearch(input)}
			/>
			<main className="grid grid-flow-row-dense gap-4 m-auto md:grid-cols-2 xl:grid-cols-3">
				{projects
					.filter(
						(project) =>
							project.title.toLowerCase().includes(search.toLowerCase()) ||
							project.technologies
								.join(" ")
								.toLowerCase()
								.includes(search.toLowerCase()) ||
							project.copy.toLowerCase().includes(search.toLowerCase()),
					)
					.map((project, index) => (
						<ProjectCard
							title={project.title}
							media={project.media}
							technologies={project.technologies}
							copy={project.copy}
							gitLink={project.gitLink}
							liveLink={project.liveLink}
							index={index}
							key={index}
						/>
					))}
			</main>
		</div>
	);
}

function SearchBar(props) {
	return (
		<input
			className="p-3 text-xl rounded-full outline-none focus:ring-2 ring-gray-500"
			placeholder="Search..."
			onInput={(e) => props.onInput(e.target.value)}
			defaultValue={props.initialValue}
		></input>
	);
}

export default Projects;
