import React, { useState, useEffect } from "react";

export default function HomeCard(props) {
	const [fade, setFade] = useState("opacity-0 translate-y-48");
	useEffect(() => {
		setFade("opacity-90 translate-y-0");
	}, []);
	return (
		<div
			className={`w-5/6 m-auto mb-4 transform-gpu bg-white rounded shadow-lg ${fade} duration-1000 transition overflow-hidden lg:w-3/4 max-w-7xl text-gray-900`}
			style={{ transitionDelay: 100 * props.index + "ms" }}
		>
			{props.content}
		</div>
	);
}
