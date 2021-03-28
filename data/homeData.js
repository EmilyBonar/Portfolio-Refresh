import Logo from "../components/Logo";
import Link from "next/link";
import projects from "./projectData";

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

function Skill(props) {
	return (
		<Link href={`/projects?query=${props.name}`}>
			<a className="px-3 py-2 mb-4 mr-4 text-lg font-semibold text-gray-700 transition bg-blue-100 rounded-lg hover:bg-blue-200">
				{props.name}
			</a>
		</Link>
	);
}

export const cards = [
	<HeaderCard />,
	<AboutCard />,
	<ProjectsCard />,
	<SkillsCard />,
];

function HeaderCard() {
	return (
		<header className="flex overflow-hidden rounded-l max-h-64">
			<img className="object-cover w-0 lg:w-56" src="/profPic.jpg" />
			<div className="flex-auto p-4 text-right sm:p-8">
				<h1 className="mb-4 text-5xl md:text-7xl">Emily Bonar</h1>
				<h2 className="text-xl text-gray-700 md:text-2xl">
					Software Developer and Materials Scientist
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
				I graduated from <SemiBold text="Rice University" /> in 2018 with a
				degree in Materials Science and Nanoengineering and a specialization in{" "}
				<SemiBold text="3D Printing" />. Since then I have been working as a{" "}
				<SemiBold text="Software Developer" /> at the Army Research Lab.
			</p>
			<p className="mb-3">
				The first piece of programming I can remember was making a calulator in{" "}
				<SemiBold text="Python" /> in 7th grade to help with math homework.
				Since then, I've been solving problems using <SemiBold text="MATLAB" />,{" "}
				<SemiBold text="LabVIEW" />, and more recently, making things using
				tools like <SemiBold text="React" />, <SemiBold text="TailwindCSS" />,
				and <SemiBold text="TypeScript" />. I'm currently attending a virtual
				batch at the{" "}
				<a href="https://www.recurse.com/">
					<SemiBold text="Recurse Center" />
				</a>{" "}
				to solidify my skills and then looking for a{" "}
				<SemiBold text="Front-End Developer" /> job, preferably in{" "}
				<SemiBold text="Austin, TX" /> or remote.
			</p>
			<p>
				Outside of tech, my interests involve reading, cooking, baking, and
				games of all types.
			</p>
		</section>
	);
}

function ProjectsCard() {
	return (
		<section className="p-4">
			<Link href="./projects">
				<a>
					<h3 className="inline-block mb-2 text-xl font-semibold text-gray-800">
						See My Projects
					</h3>
				</a>
			</Link>
			<div className="flex flex-wrap justify-center ">
				{projects.map((project) => {
					let technologies =
						project.technologies.slice(0, 4).join(" | ") +
						(project.technologies.length > 4 ? " | ..." : "");
					return (
						<div className="relative overflow-visible group">
							<Link href={`./projects?query=${project.title}`}>
								<a>
									<img
										className="object-cover object-top w-20 h-20 mb-2 mr-2 transition transform rounded group-hover:scale-110"
										src={project.media}
									/>
									<div className="absolute z-10 hidden w-40 p-2 bg-white rounded shadow -top-10 -left-1/2 group-hover:block">
										<p className="font-semibold text-md">{project.title}</p>
										<p className="text-sm">{technologies}</p>
									</div>
								</a>
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
}

function SkillsCard() {
	return (
		<section className={`px-8 pt-8 pb-4`}>
			<h3 className="mb-2 text-xl font-semibold text-gray-800">
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

function SemiBold(props) {
	return <span className="font-semibold">{props.text}</span>;
}

export default cards;
