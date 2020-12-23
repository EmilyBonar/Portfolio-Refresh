import React from "react";
import Head from "next/head";

const Resume = () => (
	<div className="flex flex-col gap-4 mb-4">
		<div className="flex w-5/6 lg:w-3/4 m-auto gap-8 text-xl text-gray-900 mt-8">
			<a href="./">Home</a>
			<a href="./projects">Projects</a>
			<a href="./resume">Resume</a>
		</div>
		<iframe
			src="/Emily Bonar Tech Resume.pdf"
			className="m-auto w-full md:w-5/6 xl:w-2/3 h-screen"
		></iframe>
	</div>
);

export default Resume;
