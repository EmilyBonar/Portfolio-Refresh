import React from "react";
import Head from "next/head";
import { skills, socialLinks } from "../data/data.js";
import NavBar from "../components/NavBar.js";

function Skill(props) {
	const skillClasses =
		"px-2 py-1 bg-blue-200 text-gray-900 rounded-lg hover:bg-blue-300 text-lg mr-4 mb-4";
	return <p className={skillClasses}>{props.name}</p>;
}

function Logo(props) {
	return (
		<a href={props.link} className="mx-2">
			<img src={props.icon} className="w-12" />
		</a>
	);
}

const cardClasses =
	"w-5/6 lg:w-3/4 m-auto bg-white opacity-90 rounded shadow-lg mb-4";

const Home = () => (
	<div className="flex flex-col mb-4">
		<NavBar />

		<div className={`${cardClasses} flex flex-wrap overflow-hidden`}>
			<div
				className="w-56 bg-cover"
				style={{ backgroundImage: `url(/profPic.jpg)` }}
			></div>
			<div className="flex-auto p-8 text-right">
				<h1 className="text-5xl lg:text-7xl mb-4">Emily Bonar</h1>
				<h3 className="text-xl lg:text-2xl text-gray-700">
					Software Developer and Materials Scientist
				</h3>
				<div className="flex justify-end mt-2">
					{socialLinks.map((social) => (
						<Logo icon={social.icon} link={social.link} />
					))}
				</div>
			</div>
		</div>
		<div className={`${cardClasses} p-8`}>
			<p className="mb-3">
				I graduated from <span className="font-semibold">Rice University</span>{" "}
				in 2018 with a degree in Materials Science and Nanoengineering and a
				specialization in <span className="font-semibold">3D Printing</span>.
			</p>
			<p className="mb-3">
				The first piece of programming I can remember was making a calulator in{" "}
				<span className="font-semibold">Python</span> in 7th grade to help with
				math homework. Since then, I've been solving problems using{" "}
				<span className="font-semibold">MATLAB</span>,{" "}
				<span className="font-semibold">LabVIEW</span>, and more recently,
				making things using <span className="font-semibold">HTML</span>,{" "}
				<span className="font-semibold">CSS</span>, and{" "}
				<span className="font-semibold">JavaScript</span>. I'm attending a
				virtual batch at the{" "}
				<a href="https://www.recurse.com/" className="font-semibold">
					Recurse Center
				</a>{" "}
				to solidify my developer skills and then looking for a tech job,
				preferably in <span className="font-semibold">Austin, TX</span>.
			</p>
			<p>
				Outside of tech, my interests are in reading, cooking, baking, and games
				of all types.
			</p>
		</div>
		<div
			className={`${cardClasses} px-8
		pt-8 pb-6`}
		>
			<h3 className="text-xl mb-2">Technical Skills</h3>
			<div className="flex flex-wrap">
				{skills.map((skill) => (
					<Skill name={skill} />
				))}
			</div>
		</div>
	</div>
);

export default Home;
