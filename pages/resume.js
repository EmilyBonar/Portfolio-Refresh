import React from "react";
import Header from "../components/Header.js";
import NavBar from "../components/NavBar.js";

const Resume = () => (
	<div className="flex flex-col w-5/6 gap-4 m-auto mb-4 max-w-7xl lg:w-3/4">
		<Header title="Emily Bonar - Resume" />
		<NavBar />
		<iframe src="/Emily Bonar Resume.pdf" className="w-full h-screen"></iframe>
	</div>
);

export default Resume;
