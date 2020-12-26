import React from "react";
import Header from "../components/Header.js";
import NavBar from "../components/NavBar.js";

const Resume = () => (
	<div className="flex flex-col gap-4 mb-4">
		<Header title="Emily Bonar - Resume" />
		<NavBar />
		<iframe
			src="/Emily Bonar Tech Resume.pdf"
			className="m-auto w-full md:w-5/6 xl:w-2/3 h-screen"
		></iframe>
	</div>
);

export default Resume;
