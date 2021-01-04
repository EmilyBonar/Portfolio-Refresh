export function NavBar(props) {
	return (
		<div className="flex w-5/6 lg:w-3/4 m-auto gap-8 text-xl text-gray-900 mt-8 mb-4">
			<NavItem name="Home" location="./" />
			<NavItem name="Projects" location="./projects" />
			<NavItem name="Resume" location="./resume" />
		</div>
	);
}

function NavItem(props) {
	return (
		<a
			href={props.location}
			className="mr-8 border-b-2 border-black hover:border-opacity-90 border-opacity-0 transition"
		>
			{props.name}
		</a>
	);
}

export default NavBar;
