import React, { useState, useEffect } from "react";

export default function AnimatedCard(props) {
	const [fade, setFade] = useState("opacity-0 translate-y-36");
	useEffect(() => {
		setFade("opacity-90 translate-y-0");
	}, []);
	return (
		<div
			className={`transform-gpu ${fade} duration-1000 transition mb-4`}
			style={{ transitionDelay: 100 * props.index + "ms" }}
		>
			{props.children}
		</div>
	);
}
