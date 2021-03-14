import Link from "next/link";

export function NavBar(props) {
	return (
		<nav className="flex w-full m-auto mt-8 mb-4 text-xl text-gray-800">
			<NavItem name="Home" location="/" />
			<NavItem name="Projects" location="/projects" />
			<NavItem name="Resume" location="/resume" />
		</nav>
	);
}

function NavItem(props) {
	return (
		<Link href={props.location}>
			<a className="mr-8 transition border-b-2 border-black border-opacity-0 lg:mr-12 hover:border-opacity-90">
				{props.name}
			</a>
		</Link>
	);
}

export default NavBar;
