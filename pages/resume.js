import React from "react";
import Header from "../components/Header.js";
import NavBar from "../components/NavBar.js";

const Resume = () => (
	<div className="flex flex-col w-5/6 max-h-screen gap-4 m-auto max-w-7xl">
		<Header title="Emily Bonar - Resume" />
		<NavBar />
		<iframe
			src="/Emily Bonar Resume.pdf"
			className="w-full h-screen pb-4"
		></iframe>
	</div>
);

export default Resume;
