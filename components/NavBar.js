import Link from "next/link";

export function NavBar(props) {
	return (
		<div className="flex w-5/6 m-auto mt-8 mb-4 text-xl text-gray-900 max-w-7xl lg:w-3/4">
			<NavItem name="Home" location="./" />
			<NavItem name="Projects" location="./projects" />
			<NavItem name="Resume" location="./resume" />
		</div>
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
