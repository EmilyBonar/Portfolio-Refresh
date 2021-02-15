import React from "react";
import AnimatedCard from "./AnimatedCard";

export default function HomeCard(props) {
	return (
		<AnimatedCard
			content={
				<div className="w-5/6 m-auto mb-4 overflow-hidden text-gray-900 bg-white rounded shadow-lg lg:w-3/4 max-w-7xl">
					{props.content}
				</div>
			}
			index={props.index}
		/>
	);
}
