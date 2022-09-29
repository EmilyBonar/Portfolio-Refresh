import Logo from "../components/Logo";
import Link from "next/link";
import projects from "./projectData";
import React from "react";
import Markdown from "markdown-to-jsx";
import about from "./about.md";
import Image from "next/future/image";

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
		<header className='flex overflow-hidden rounded-l max-h-64'>
			<img className='object-cover w-0 lg:w-56' src='/profPic.jpg' />
			<div className='flex-auto p-4 text-right sm:p-8'>
				<h1 className='my-2 text-5xl md:text-7xl'>Emily Bonar</h1>
				<h2 className='text-xl text-gray-700 md:text-2xl'>
					Front-End Developer
				</h2>
				<div className='flex justify-end mt-2'>
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
		<section className='p-8'>
			<Markdown className='flex flex-col gap-3'>{about}</Markdown>
		</section>
	);
}

function MiniProjectsCard() {
	return (
		<section className='p-8 pb-4'>
			<Link href='./projects'>
				<a>
					<h3 className='inline-block mb-2 text-xl font-semibold text-gray-900'>
						See My Projects
					</h3>
				</a>
			</Link>
			<div className='flex gap-4 overflow-x-scroll overflow-y-hidden flex-nowrap'>
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
			<a className='flex-shrink-0 w-32 h-32 mb-4 group'>
				<div className='w-full h-full shadow-lg'>
					<Image
						className='block object-cover object-top w-full h-full rounded'
						src={props.project.media}
						width={128}
						height={128}
						alt={`Link to ${props.project.title}`}
					/>
				</div>
				<div className='relative w-full h-full p-2 bg-white rounded shadow-lg opacity-0 top-[-100%] bg-opacity-90 group-hover:opacity-100'>
					<p className='font-semibold text-md'>{props.project.title}</p>
					<p className='text-sm'>
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
			<h3 className='mb-2 text-xl font-semibold text-gray-900'>
				Technical Skills
			</h3>
			<div className='flex flex-wrap justify-center sm:justify-start'>
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
			<a className='px-3 py-2 mb-4 mr-4 text-lg font-semibold text-gray-800 transition bg-pink-100 rounded-lg shadow-inner hover:bg-pink-300 hover:shadow-lg'>
				{props.name}
			</a>
		</Link>
	);
}

export const skills = [
	"React",
	"JavaScript",
	"TypeScript",
	"Node.js",
	"HTML",
	"CSS",
	"Python",
	"MATLAB",
	"TailwindCSS",
	"Next.js",
	"PostgreSQL",
];

export default cards;
