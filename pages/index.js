import React from "react";
import Head from "next/head";

function Skill(props) {
	const skillClasses =
		"px-2 py-1 bg-blue-200 text-gray-900 rounded-lg hover:bg-blue-300 text-lg";
	return <p className={skillClasses}>{props.name}</p>;
}

const Home = () => (
	<div className="flex flex-col gap-4 mb-4">
		<div className="flex w-5/6 lg:w-3/4 m-auto gap-8 text-xl text-gray-900">
			<a href="./">Home</a>
			<a href="./software">Software</a>
			<a href="./materials">Materials</a>
		</div>

		<div className="w-5/6 lg:w-3/4 m-auto bg-gray-100 opacity-95 text-right p-8 rounded shadow-lg">
			<h1 className="text-5xl lg:text-7xl mb-4">Emily Bonar</h1>
			<h3 className="text-xl lg:text-2xl text-gray-700">
				Software Developer and Materials Scientist
			</h3>
		</div>
		<div className="w-5/6 lg:w-3/4 m-auto bg-gray-100 opacity-95 p-8 rounded shadow-lg">
			<p className="mb-2">
				I graduated from <span className="font-semibold">Rice University</span>{" "}
				in 2018 with a degree in Materials Science and Nanoengineering and a
				specialization in <span className="font-semibold">3D Printing</span>.
			</p>
			<p>
				The first piece of programming I can remember was making a calulator in{" "}
				<span className="font-semibold">Python</span> in 7th grade to help with
				math homework. It didn't do any more than my scientific calculator did,
				but it set me on a path of learning what I could do with a computer.
			</p>
		</div>
		<div className="w-5/6 lg:w-3/4 m-auto bg-gray-100 opacity-95 p-8 rounded shadow-lg">
			<h3 className="text-xl mb-2">Skills</h3>
			<div className="flex gap-4 flex-wrap">
				<Skill name="Javascript" />
				<Skill name="Node" />
				<Skill name="React" />
				<Skill name="HTML" />
				<Skill name="CSS" />
				<Skill name="Python" />
				<Skill name="MATLAB" />
				<Skill name="LabVIEW" />
			</div>
		</div>
	</div>
);

export default Home;
