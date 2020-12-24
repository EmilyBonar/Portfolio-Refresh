export function NavBar(props) {
	return (
		<div className="flex w-5/6 lg:w-3/4 m-auto gap-8 text-xl text-gray-900 mt-8 mb-4">
			<a href="./" className="mr-8">
				Home
			</a>
			<a href="./projects" className="mr-8">
				Projects
			</a>
			<a href="./resume" className="mr-8">
				Resume
			</a>
		</div>
	);
}

export default NavBar;
