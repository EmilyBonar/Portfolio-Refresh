import Link from "next/link";
import { useMemo } from "react";

export function NavBar(props) {
	const currentPage = useMemo(() => {
		return props.title.split("Emily Bonar - ").join("");
	}, []);
	return (
		<nav className="flex w-full gap-8 m-auto mt-6 mb-4 text-2xl font-semibold text-gray-600 lg:gap-12">
			<NavItem name="Home" location="/" currentPage={currentPage} />
			<NavItem name="Projects" location="/projects" currentPage={currentPage} />
			<NavItem name="Resume" location="/resume" currentPage={currentPage} />
		</nav>
	);
}

function NavItem(props) {
	const current = useMemo(() => {
		return props.currentPage === props.name;
	}, []);
	return (
		<Link href={props.location}>
			<a
				className={`transition border-b-2 border-black ${
					current ? "border-opacity-40" : "border-opacity-0"
				} hover:border-opacity-90`}
			>
				{props.name}
			</a>
		</Link>
	);
}

export default NavBar;
