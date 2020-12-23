import React from "react";
import Head from "next/head";

function MediaCard(props) {
	return (
		<div
			className={`m-auto bg-white opacity-90 rounded shadow-lg overflow-hidden pb-8 flex flex-col`}
		>
			<img src={props.media} className="w-full" />
			<h1 className="font-bold text-2xl px-8 pt-4 tracking-wide">
				{props.title}
			</h1>
			<p className="capitalize tracking-wider text-gray-600">
				{props.technologies}
			</p>
			<div className="pt-4 px-8">{props.copy}</div>
			<div className="flex m-auto mt-4">
				{props.liveLink && (
					<a href={props.liveLink}>
						<img className="mx-4" width="48" src={"/icon-link.svg"}></img>
					</a>
				)}
				{props.gitLink && (
					<a href={props.gitLink}>
						<img className="mx-4" width="48" src={"/GitHub-Mark.svg"}></img>
					</a>
				)}
			</div>
		</div>
	);
}

const Projects = () => (
	<div className="flex flex-col gap-4 mb-4">
		<div className="flex w-5/6 lg:w-3/4 m-auto gap-8 text-xl text-gray-900 mt-8">
			<a href="./">Home</a>
			<a href="./projects">Projects</a>
		</div>
		<div className="grid grid-flow-row-dense lg:grid-cols-3 gap-4 w-5/6 lg:w-3/4 m-auto">
			<MediaCard
				title="LookOutside"
				media="/LookOutside.png"
				copy="I developed LookOutside as a dashboard that could provide information
			about the outside world without leaving the house. It uses Google Maps,
			OpenWeather, and Disease.sh REST APIs to create a summery of weather and
			COVID conditions in a given area of the US. It was developed using React
			and Tailwind CSS for the front end, and Netlify Node.js functions to fetch
			data from the APIs using Axios."
				gitLink="https://github.com/EmilyBonar/lookoutside"
				liveLink="https://www.emilybonar.com/LookOutside/"
			/>
			<MediaCard
				title="TuneTester"
				media="/TuneTester.jpg"
				copy="I participated in the Technica 2020 virtual hackathon. Working with a
			team, I developed TuneTester. It's an React single-page application that
			allows you to put in the URL of a Spotify playlist, and returns a
			visualization of the playlist based on duration and danceability,
			retrieved from the Spotify REST API. This was a challenging project to
			complete in just 24 hours, as none of us had significant experience
			working with either REST or React. I ended up using Node.js and Netlify
			serverless functions to fetch data from the API and provide it to the
			front-end without revealing authentication details along the way."
				gitLink="https://github.com/EmilyBonar/TuneTester"
				liveLink="https://www.emilybonar.com/TuneTester/"
			/>
			<MediaCard
				title="Sourdough Calculator"
				media="/Sourdough Calculator.png"
				copy="Sourdough Calculator started life as an Excel spreadsheet for
			my personal use, but when I saw other people online having trouble with
			the same problem I developed it into a website. What it does is convert recipes to adapt to
			your personal sourdough starter, letting you use whatever hydration level
			you want without throwing off the rest of the recipe."
				gitLink="https://github.com/EmilyBonar/Sourdough-Calculator"
				liveLink="https://www.emilybonar.com/Sourdough-Calculator/"
			/>
			<MediaCard
				title="Nearest Named Color"
				media={"/Nearest Named Color.png"}
				copy="I was curious about the named colors in HTML and how to find which one was
			the closest to any input if you wanted to specifically use named colors
			for a design. I couldn't find anything that would answer that question to
			my satisfaction, so I made Nearest Named Color. This tool lets uses
			JavaScript to let you pick a color and tells you the nearest named color
			in RGB space. Demonstration of the tool finding the nearest named color
			Making this was a helpful first step in learning layout, how HTML and CSS
			deal with color, and using Javascript to affect the content of web pages.
			In order to find the nearest color, I used the following code. I employed
			a simple Euclidian distance formula, calculating the color distance for
			all of the 140 named colors in comparison to the one color selected."
				gitLink="https://github.com/EmilyBonar/NearestNamedColor"
				liveLink="https://www.emilybonar.com/NearestNamedColor/"
			/>
		</div>
	</div>
);

export default Projects;
