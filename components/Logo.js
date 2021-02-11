export default function Logo(props) {
	return (
		<a href={props.link} className="mx-2">
			<img
				src={props.icon}
				width={48}
				className="w-12"
				alt={`Link to ${props.name}`}
			/>
		</a>
	);
}
