import React from "react";
import AnimatedCard from "./AnimatedCard";

export default function HomeCard(props) {
	return (
		<AnimatedCard
			content={
				<div className="w-full m-auto mb-4 text-gray-900 bg-white rounded shadow-lg">
					{props.content}
				</div>
			}
			index={props.index}
		/>
	);
}
