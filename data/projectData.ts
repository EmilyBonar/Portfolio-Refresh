interface Project {
	title: string;
	media: string;
	technologies: string[];
	copy: string;
	gitLink?: string;
	liveLink?: string;
}

export const projects: Project[] = [
	{
		title: "Rainbow",
		media: "/rainbow.png",
		technologies: ["TypeScript", "React", "MaterialUI"],
		copy: "A toy for generating color ranges based on HSL values.",
		gitLink: "https://github.com/EmilyBonar/rainbow",
		liveLink: "https://rainbow.emilybonar.com/",
	},
	{
		title: "Box Generator",
		media: "/box-gen.png",
		technologies: ["TypeScript", "React", "TailwindCSS"],
		copy: "A toy for generating spinning boxes of points.",
		gitLink: "https://github.com/EmilyBonar/Box-Generator",
		liveLink: "https://box-gen.emilybonar.com/",
	},
	{
		title: "Points",
		media: "/points.png",
		technologies: ["TypeScript", "React", "Canvas"],
		copy: "An art piece that generates chaos out of an ordered grid of points",
		gitLink: "https://github.com/EmilyBonar/points",
		liveLink: "https://points.emilybonar.com/",
	},
	{
		title: "ColorGuesser",
		media: "/ColorGuesser.png",
		technologies: ["TypeScript", "React", "TailwindCSS"],
		copy: "A game that tests your ability to locate colors by name.",
		gitLink: "https://github.com/EmilyBonar/color-guesser",
		liveLink: "https://color-guesser.emilybonar.com/",
	},
	{
		title: "MusicalsFYI",
		media: "/musicalsfyi.png",
		technologies: ["TypeScript", "React", "TailwindCSS", "Spotify"],
		copy: "A resource for viewing and sorting musical theater.",
		gitLink: "https://github.com/EmilyBonar/musicals",
		liveLink: "https://musicals.emilybonar.com/",
	},
	{
		title: "Orbits",
		media: "/orbits.png",
		technologies: ["TypeScript", "React", "TailwindCSS", "CSS"],
		copy: "A toy that uses CSS animations to control the orbits of balls on a track.",
		gitLink: "https://github.com/EmilyBonar/orbits",
		liveLink: "https://orbits.emilybonar.com/",
	},
	{
		title: "Tiling",
		media: "/Tiling.png",
		technologies: ["TypeScript", "React", "TailwindCSS"],
		copy: "A hypnotic art piece made using CSS transitions.",
		gitLink: "https://github.com/EmilyBonar/tiling",
		liveLink: "https://tiling.emilybonar.com/",
	},
	{
		title: "Grocery List",
		media: "/GroceryList.png",
		technologies: ["TypeScript", "React Native"],
		copy: "An app that allows you to make, store, and retrieve lists.",
		gitLink: "https://github.com/EmilyBonar/grocery-list",
	},
	{
		title: "Dandara 3D",
		media: "/dandara.png",
		technologies: ["Unity", "C#"],
		copy: "A video game made with an unusual movement mechanic.",
		liveLink: "https://dandara.emilybonar.com/",
	},
	{
		title: "Adjective Noun",
		media: "/Adjective Noun.png",
		technologies: ["JavaScript", "React", "TailwindCSS"],
		copy: "A single page app that randomly generates combinations of adjectives and nouns.",
		gitLink: "https://github.com/EmilyBonar/adjective-noun",
		liveLink: "https://adjective-noun.emilybonar.com/",
	},
	{
		title: "flibberty gibbets",
		media: "/flibberty gibbets.png",
		technologies: [
			"JavaScript",
			"Next.js",
			"TailwindCSS",
			"REST",
			"PostgreSQL",
			"Node.js",
		],
		copy: "An asynchronous, database-driven messaging system, similar to Twitter.",
		gitLink: "https://github.com/EmilyBonar/flibberty-gibbets",
		liveLink: "https://flibberty-gibbets.emilybonar.com/",
	},
	{
		title: "SearchBlocker",
		media: "/SearchBlocker.svg",
		technologies: ["JavaScript", "LocalStorage"],
		copy: "A Firefox extension that blocks selected domains from appearing in Google search results.",
		gitLink: "https://github.com/EmilyBonar/SearchBlocker",
		liveLink: "https://addons.mozilla.org/en-US/firefox/addon/searchblocker/",
	},
	{
		title: "LookOutside",
		media: "/LookOutside.png",
		technologies: [
			"React",
			"TailwindCSS",
			"REST",
			"Google Maps",
			"OpenWeather",
			"Disease.sh",
			"Axios",
			"Node.js",
		],
		copy: "A dashboard that creates a summary of weather and COVID conditions in a given area of the US.",
		gitLink: "https://github.com/EmilyBonar/lookoutside",
		liveLink: "https://www.emilybonar.com/LookOutside/",
	},
	{
		title: "TuneTester",
		media: "/TuneTester.jpg",
		technologies: ["React", "TailwindCSS", "REST", "Spotify", "Node.js"],
		copy: "Allows you to put in the URL of a Spotify playlist, and returns a visualization of the playlist based on audio features.",
		gitLink: "https://github.com/EmilyBonar/TuneTester",
		liveLink: "https://www.emilybonar.com/TuneTester/",
	},
	{
		title: "Sourdough Calculator",
		media: "/Sourdough Calculator.png",
		technologies: ["HTML", "CSS", "JavaScript", "Data Attributes"],
		copy: "Converts recipes to adapt to your personal sourdough starter, letting you use whatever hydration level you want.",
		gitLink: "https://github.com/EmilyBonar/Sourdough-Calculator",
		liveLink: "https://www.emilybonar.com/Sourdough-Calculator/",
	},
	{
		title: "Nearest Named Color",
		media: "/Nearest Named Color.png",
		technologies: ["HTML", "CSS", "JavaScript"],
		copy: "Lets you pick a color and tells you the nearest CSS named color in RGB space.",
		gitLink: "https://github.com/EmilyBonar/NearestNamedColor",
		liveLink: "https://www.emilybonar.com/NearestNamedColor/",
	},
];

export default projects;
