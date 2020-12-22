import React from "react";
import Head from "next/head";

function Skill(props) {
	const skillClasses =
		"px-2 py-1 bg-blue-200 rounded-lg hover:bg-blue-300 text-lg";
	return <p className={skillClasses}>{props.name}</p>;
}

const Home = () => (
	<div className="flex flex-col gap-4">
		<div className="flex w-4/5 m-auto gap-8 text-xl text-gray-900">
			<a href="./">Home</a>
			<a href="./software">Software</a>
			<a href="./materials">Materials</a>
		</div>

		<div className="w-4/5 m-auto bg-gray-100 opacity-95 text-right p-8 rounded shadow-lg">
			<h1 className="text-5xl lg:text-7xl mb-4">Emily Bonar</h1>
			<h3 className="text-xl lg:text-2xl text-gray-700">
				Software Developer and Materials Scientist
			</h3>
		</div>
		<div className="w-4/5 m-auto bg-gray-100 opacity-95 p-8 rounded shadow-lg"></div>
		<div className="w-4/5 m-auto bg-gray-100 opacity-95 p-8 rounded shadow-lg">
			<h3 className="text-xl mb-2">Skills</h3>
			<div className="flex gap-4 flex-wrap">
				<Skill name="Javascript" />
				<Skill name="Node" />
				<Skill name="React" />
				<Skill name="HTML" />
				<Skill name="CSS" />
				<Skill name="Python" />
			</div>
		</div>
	</div>
);

export default Home;
