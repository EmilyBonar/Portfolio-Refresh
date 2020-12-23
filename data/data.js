export const skills = [
	"JavaScript",
	"Node.js",
	"React",
	"HTML",
	"CSS",
	"Python",
	"MATLAB",
	"LabVIEW",
	"REST",
];

export const socialLinks = [
	{ icon: "/LI-In-Bug.png", link: "https://www.linkedin.com/in/emilybonar/" },
	{ icon: "/GitHub-Mark.svg", link: "https://github.com/EmilyBonar" },
];

export const projects = [
	{
		title: "SearchBlocker",
		media: "/SearchBlocker.svg",
		technologies: "JavaScript | LocalStorage",
		copy:
			"A Firefox extension that blocks selected domains from appearing in Google search results.",
		gitLink: "https://github.com/EmilyBonar/SearchBlocker",
		liveLink: "https://addons.mozilla.org/en-US/firefox/addon/searchblocker/",
	},
	{
		title: "LookOutside",
		media: "/LookOutside.png",
		technologies:
			"React | TailwindCSS | REST | Google Maps | OpenWeather | Disease.sh | Axios | Node.js",
		copy:
			"A dashboard that creates a summery of weather and COVID conditions in a given area of the US.",
		gitLink: "https://github.com/EmilyBonar/lookoutside",
		liveLink: "https://www.emilybonar.com/LookOutside/",
	},
	{
		title: "TuneTester",
		media: "/TuneTester.jpg",
		technologies: "React | REST | Spotify | Node.js",
		copy:
			"Allows you to put in the URL of a Spotify playlist, and returns a visualization of the playlist based on duration and danceability.",
		gitLink: "https://github.com/EmilyBonar/TuneTester",
		liveLink: "https://www.emilybonar.com/TuneTester/",
	},
	{
		title: "Sourdough Calculator",
		media: "/Sourdough Calculator.png",
		technologies: "HTML | CSS | JavaScript | Data Attributes",
		copy:
			"Converts recipes to adapt to your personal sourdough starter, letting you use whatever hydration level you want without throwing off the rest of the recipe.",
		gitLink: "https://github.com/EmilyBonar/Sourdough-Calculator",
		liveLink: "https://www.emilybonar.com/Sourdough-Calculator/",
	},
	{
		title: "Nearest Named Color",
		media: "/Nearest Named Color.png",
		technologies: "HTML | CSS | JavaScript",
		copy:
			"Lets you pick a color and tells you the nearest CSS named color in RGB space.",
		gitLink: "https://github.com/EmilyBonar/NearestNamedColor",
		liveLink: "https://www.emilybonar.com/NearestNamedColor/",
	},
];

export default projects;
