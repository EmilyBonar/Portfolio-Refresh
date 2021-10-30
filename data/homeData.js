import Logo from "../components/Logo";
import Link from "next/link";
import projects from "./projectData";
import React from "react";

export const socialLinks = [
	{
		name: "LinkedIn",
		icon: "/linkedin.svg",
		link: "https://www.linkedin.com/in/emilybonar/",
	},
	{
		name: "GitHub",
		icon: "/GitHub-Mark.svg",
		link: "https://github.com/EmilyBonar",
	},
];

export const cards = [
	<HeaderCard />,
	<AboutCard />,
	<MiniProjectsCard />,
	<SkillsCard />,
];

function HeaderCard() {
	return (
		<header className="flex overflow-hidden rounded-l max-h-64">
			<img className="object-cover w-0 lg:w-56" src="/profPic.jpg" />
			<div className="flex-auto p-4 text-right sm:p-8">
				<h1 className="my-2 text-5xl md:text-7xl">Emily Bonar</h1>
				<h2 className="text-xl text-gray-700 md:text-2xl">
					Front-End Developer
				</h2>
				<div className="flex justify-end mt-2">
					{socialLinks.map((social, index) => (
						<Logo
							icon={social.icon}
							link={social.link}
							name={social.name}
							key={index}
						/>
					))}
				</div>
			</div>
		</header>
	);
}

function AboutCard() {
	return (
		<section className={`p-8`}>
			<p className="mb-3">
				I graduated from{" "}
				<a href="https://www.rice.edu/" className="hover:text-blue-600">
					<strong>Rice University</strong>
				</a>{" "}
				in 2018 with a degree in Materials Science and Nanoengineering and a
				specialization in <strong>3D Printing</strong>. Since then I've switched
				focus to <strong>Front-End Development</strong> and making websites
				(like this one!).
			</p>
			<p className="mb-3">
				The first piece of programming I can remember was making a calulator in{" "}
				<strong>Python</strong> in 7th grade to help with math homework. Since
				then, I've been solving problems using <strong>MATLAB</strong>,{" "}
				<strong>LabVIEW</strong>, and more recently, making things using tools
				like <strong>React</strong>, <strong>TailwindCSS</strong>, and{" "}
				<strong>TypeScript</strong>. I finished a batch at the{" "}
				<a href="https://www.recurse.com/" className="hover:text-blue-600">
					<strong>Recurse Center</strong>
				</a>{" "}
				where I honed my web development skills, and am currently working
				remotely as a <strong>Front-End Developer</strong> at{" "}
				<strong>HPE</strong>.
			</p>
			<p>
				Outside of tech, my interests involve reading, cooking, baking, and
				games of all types.
			</p>
		</section>
	);
}

function MiniProjectsCard() {
	return (
		<section className="p-8 pb-4">
			<Link href="./projects">
				<a>
					<h3 className="inline-block mb-2 text-xl font-semibold text-gray-900">
						See My Projects
					</h3>
				</a>
			</Link>
			<div className="flex gap-4 overflow-x-scroll overflow-y-hidden flex-nowrap">
				{projects.map((project, index) => {
					return <MiniProject project={project} key={index} />;
				})}
			</div>
		</section>
	);
}

function MiniProject(props) {
	return (
		<Link href={`./projects?query=${props.project.title}`}>
			<a className="flex-shrink-0 w-32 h-32 mb-4 group">
				<div className="w-full h-full shadow-lg">
					<img
						className="block object-cover object-top w-full h-full rounded"
						src={props.project.media}
					/>
				</div>
				<div className="relative w-full h-full p-2 bg-white rounded shadow-lg opacity-0 top-[-100%] bg-opacity-90 group-hover:opacity-100">
					<p className="font-semibold text-md">{props.project.title}</p>
					<p className="text-sm">
						{props.project.technologies.slice(0, 4).join(" | ") +
							(props.project.technologies.length > 4 ? " | ..." : "")}
					</p>
				</div>
			</a>
		</Link>
	);
}

function SkillsCard() {
	return (
		<section className={`p-8 pb-4`}>
			<h3 className="mb-2 text-xl font-semibold text-gray-900">
				Technical Skills
			</h3>
			<div className="flex flex-wrap justify-center sm:justify-start">
				{skills.map((skill, index) => (
					<Skill name={skill} key={index} />
				))}
			</div>
		</section>
	);
}

function Skill(props) {
	return (
		<Link href={`/projects?query=${props.name}`}>
			<a className="px-3 py-2 mb-4 mr-4 text-lg font-semibold text-gray-800 transition bg-pink-100 rounded-lg shadow-inner hover:bg-pink-300 hover:shadow-lg">
				{props.name}
			</a>
		</Link>
	);
}

export const skills = [
	"JavaScript",
	"Node.js",
	"React",
	"HTML",
	"CSS",
	"Python",
	"MATLAB",
	"LabVIEW",
	"REST",
	"TailwindCSS",
	"Next.js",
	"PostgreSQL",
	"TypeScript",
];

export default cards;
