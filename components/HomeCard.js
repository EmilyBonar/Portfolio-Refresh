import React from "react";
import AnimatedCard from "./AnimatedCard";

export default function HomeCard(props) {
	return (
		<AnimatedCard index={props.index}>
			<div className='w-full m-auto mb-4 text-gray-900 bg-white rounded shadow-lg bg-opacity-80'>
				{props.content}
			</div>
		</AnimatedCard>
	);
}
