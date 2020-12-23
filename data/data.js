export const projects = [
	{
		title: "LookOutside",
		media: "/LookOutside.png",
		technologies: "",
		copy:
			"I developed LookOutside as a dashboard that could provide information about the outside world without leaving the house. It uses Google Maps, OpenWeather, and Disease.sh REST APIs to create a summery of weather and COVID conditions in a given area of the US. It was developed using React and Tailwind CSS for the front end, and Netlify Node.js functions to fetch data from the APIs using Axios.",
		gitLink: "https://github.com/EmilyBonar/lookoutside",
		liveLink: "https://www.emilybonar.com/LookOutside/",
	},
	{
		title: "TuneTester",
		media: "/TuneTester.jpg",
		technologies: "",
		copy:
			"I participated in the Technica 2020 virtual hackathon. Working with a team, I developed TuneTester. It's an React single-page application that allows you to put in the URL of a Spotify playlist, and returns a visualization of the playlist based on duration and danceability, retrieved from the Spotify REST API. This was a challenging project to complete in just 24 hours, as none of us had significant experience working with either REST or React. I ended up using Node.js and Netlify serverless functions to fetch data from the API and provide it to the front-end without revealing authentication details along the way.",
		gitLink: "https://github.com/EmilyBonar/TuneTester",
		liveLink: "https://www.emilybonar.com/TuneTester/",
	},
	{
		title: "Sourdough Calculator",
		media: "/Sourdough Calculator.png",
		technologies: "",
		copy:
			"Sourdough Calculator started life as an Excel spreadsheet for my personal use, but when I saw other people online having trouble with the same problem I developed it into a website. What it does is convert recipes to adapt to your personal sourdough starter, letting you use whatever hydration level you want without throwing off the rest of the recipe.",
		gitLink: "https://github.com/EmilyBonar/Sourdough-Calculator",
		liveLink: "https://www.emilybonar.com/Sourdough-Calculator/",
	},
	{
		title: "Nearest Named Color",
		media: "/Nearest Named Color.png",
		technologies: "",
		copy:
			"I was curious about the named colors in HTML and how to find which one was the closest to any input if you wanted to specifically use named colors for a design. I couldn't find anything that would answer that question to my satisfaction, so I made Nearest Named Color. This tool lets uses JavaScript to let you pick a color and tells you the nearest named color in RGB space. Making this was a helpful first step in learning layout, how HTML and CSS deal with color, and using Javascript to affect the content of web pages. In order to find the nearest color, I used the following code. I employed a simple Euclidian distance formula, calculating the color distance for all of the 140 named colors in comparison to the one color selected.",
		gitLink: "https://github.com/EmilyBonar/NearestNamedColor",
		liveLink: "https://www.emilybonar.com/NearestNamedColor/",
	},
];

export default projects;
