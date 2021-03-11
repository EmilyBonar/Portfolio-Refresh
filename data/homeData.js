import Logo from "../components/Logo";

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
	const skillClasses =
		"px-2 py-1 bg-blue-200 text-gray-900 rounded-lg hover:bg-blue-300 text-lg mr-4 mb-4";
	return <p className={skillClasses}>{props.name}</p>;
}

export const cards = [
	<header className="flex flex-wrap">
		<img className="object-cover w-0 lg:w-56" src="/profPic.jpg" />
		<div className="flex-auto p-8 text-right">
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
	</header>,
	<section className={`p-8`}>
		<p className="mb-3">
			I graduated from <SemiBold text="Rice University" /> in 2018 with a degree
			in Materials Science and Nanoengineering and a specialization in{" "}
			<SemiBold text="3D Printing" />.
		</p>
		<p className="mb-3">
			The first piece of programming I can remember was making a calulator in{" "}
			<SemiBold text="Python" /> in 7th grade to help with math homework. Since
			then, I've been solving problems using <SemiBold text="MATLAB" />,{" "}
			<SemiBold text="LabVIEW" />, and more recently, making things using tools
			like <SemiBold text="React" />, <SemiBold text="TailwindCSS" />, and{" "}
			<SemiBold text="TypeScript" />. I'm currently attending a virtual batch at
			the{" "}
			<a href="https://www.recurse.com/">
				<SemiBold text="Recurse Center" />
			</a>{" "}
			to solidify my skills and then looking for a{" "}
			<SemiBold text="Front-End Developer" /> job, preferably in{" "}
			<SemiBold text="Austin, TX" />.
		</p>
		<p>
			Outside of tech, my interests involve reading, cooking, baking, and games
			of all types.
		</p>
	</section>,
	<section className={`px-8 pt-8 pb-6`}>
		<h3 className="mb-2 text-xl">Technical Skills</h3>
		<div className="flex flex-wrap">
			{skills.map((skill) => (
				<Skill name={skill} />
			))}
		</div>
	</section>,
];

function SemiBold(props) {
	return <span className="font-semibold">{props.text}</span>;
}

export default cards;
