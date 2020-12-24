export function ProjectCard(props) {
	return (
		<div
			className={`m-auto bg-white opacity-90 rounded shadow-lg overflow-hidden pb-8 flex flex-col min-h-full`}
		>
			<img src={props.media} className="w-full h-64 object-cover object-top" />
			<h1 className="font-bold text-2xl px-8 pt-4 tracking-wide">
				{props.title}
			</h1>
			<p className="uppercase tracking-widest px-8 text-xs pt-1 text-gray-600">
				{props.technologies}
			</p>
			<div className="pt-2 px-8">{props.copy}</div>
			<div className="flex m-auto mt-4">
				{props.liveLink && (
					<a href={props.liveLink}>
						<img className="mx-4" width="48" src={"/icon-link.svg"}></img>
					</a>
				)}
				{props.gitLink && (
					<a href={props.gitLink} className="mx-4">
						<img width="48" src={"/GitHub-Mark.svg"}></img>
					</a>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
