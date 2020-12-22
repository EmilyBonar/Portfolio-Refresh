import React from "react";
import Head from "next/head";

const Home = () => (
	<div className="flex flex-col">
		<div className="flex w-4/5 m-auto gap-8 text-xl text-gray-900">
			<a href="./">Home</a>
			<a href="./software">Software</a>
			<a href="./materials">Materials</a>
		</div>

		<div className="w-4/5 m-auto bg-gray-100 opacity-95 text-right p-8 rounded">
			<h1 className="text-7xl mb-4">Emily Bonar</h1>
			<h3 className="text-2xl text-gray-700">
				Software Developer and Materials Scientist
			</h3>
		</div>
	</div>
);

export default Home;
