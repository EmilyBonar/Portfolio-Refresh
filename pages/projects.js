import React from "react";
import Head from "next/head";
import classnames from "classnames";

let cardClasses =
	"w-5/6 lg:w-3/4 m-auto bg-gray-100 opacity-95 p-8 rounded shadow-lg";

const Software = () => (
	<div className="flex flex-col gap-4 mb-4">
		<div className="flex w-5/6 lg:w-3/4 m-auto gap-8 text-xl text-gray-900">
			<a href="./">Home</a>
			<a href="./projects">Projects</a>
		</div>
		<div className={cardClasses}>
			At the Army Research Lab, I've architected software controlling an aerosol
			deposition machine, capable of depositing layers of powder microns thick.
			The goal of this research is to be able to print electrical traces in 3D
			with higher conductivity and strength than ink-based solutions. I started
			learning LabVIEW shortly after beginning work at ARL in 2018. About a year
			later, I achieved the Certified LabVIEW Developer certificate from
			National Instruments and had become the sole developer on a large
			application meant to control the aerosol depoisiton machine and all the
			physical components associated with it. I implemented the Actor Framework
			model to coordinate systems, consolidating them from their previous
			individual apps. This involved writing design documents, creating a
			loosely-coupled messaging architechture, and scripting in Python and
			MATLAB to collect, transform, and visualize data.
		</div>
		<div className={cardClasses}>
			I developed LookOutside as a dashboard that could provide information
			about the outside world without leaving the house. It uses Google Maps,
			OpenWeather, and Disease.sh REST APIs to create a summery of weather and
			COVID conditions in a given area of the US. It was developed using React
			and Tailwind CSS for the front end, and Netlify Node.js functions to fetch
			data from the APIs using Axios.
		</div>
		<div className={cardClasses}>
			I participated in the Technica 2020 virtual hackathon. Working with a
			team, I developed TuneTester. It's an React single-page application that
			allows you to put in the URL of a Spotify playlist, and returns a
			visualization of the playlist based on duration and danceability,
			retrieved from the Spotify REST API. This was a challenging project to
			complete in just 24 hours, as none of us had significant experience
			working with either REST or React. I ended up using Node.js and Netlify
			serverless functions to fetch data from the API and provide it to the
			front-end without revealing authentication details along the way.
		</div>
		<div className={cardClasses}>
			I enjoy baking, and during the pandemic I decided to get back into making
			sourdough. Sourdough Calculator started life as an Excel spreadsheet for
			my personal use, but when I saw other people online having trouble with
			the same problem I developed it into a website. Sourdough is made using a
			starter, a mixture of flour and water that you regularly feed, a portion
			of which you use whenever you bake. The most common ratio of flour:water
			is 1:1 by weight, however other ratios are possible. Personally, I use a
			60% hydration starter, which means that I add 5:3 flour:water. The problem
			is, most recipes are written assuming your starter is 1:1, or 100%
			hydration. Therefore, if you're not using that the total amounts of flour
			and water will be thrown off and your bread might not come out the way you
			want it to. What Sourdough Calculator does is convert recipes to adapt to
			your personal sourdough starter, letting you use whatever hydration level
			you want without throwing off the rest of the recipe. The most challenging
			and informative part of this project was developing my own custom
			tooltips. I wanted to be able to provide information about terms used, in
			case someone coming to the page is a novice baker wanting to learn more.
			Alt text isn't usable for that purpose on mobile and I didn't want to
			require JavaScript, which lead me to the following pure CSS solution.
			<pre>{`
[data-title]::after {
	content: attr(data-title);
	position: absolute;
	visibility: hidden;
	background-color: white;
	border: 1px solid #020611;
	border-radius: 5px;
	padding: 5px;
	bottom: 40px;
	left: 0px;
	width: 240px;
	z-index: 10;
}
				
[data-title]:hover::after {
	visibility: visible;
}
`}</pre>
		</div>
		<div className={cardClasses}>
			Building this website has been a great practical exploration of HTML, CSS,
			and JavaScript. I had a basic understanding of them already, but there's
			no better form of practice than actually making something. I've had to
			deal with build systems, hosting, git, and various other problems and
			solutions that have popped up along the way. Building it from scratch,
			while perhaps more complicated than using a CMS, has given me a greater
			appreciation of what's going on behind the scenes. I set up a build system
			using Gulp that allows me to have a live development server of the site.
			It also, and this is the reason I set it up, can inject HTML into static
			pages before deployment. This is very helpful, as it lets me section the
			header, footer, and so on into individual files and reuse code instead of
			rewriting it. It's always helpful for me to have an actual problem to
			solve when I'm trying to learn, and this has been great for teaching me
			more about Node.js. The following block of code is a part that I had
			trouble with initially, and also the part that I solved on my own, instead
			of getting a package to do it for me. I had a function that would take
			source files, process them, and copy them to the distribution directory.
			But when I didn't need a certain file anymore and deleted it from source,
			my script had no way of knowing to remove it from distribution as well.
			Creating this process to clean the distribution directory of unneeded
			files helped me learn more about globbing and working with the filesystem
			in Node.js, as well as learning when it's time to stop searching npm and
			to just do it myself.
			<pre>{`
let source = "./src";
let distrib = "./EmilyBonar.github.io/"
function readSrcFiles() {
    srcFileList = glob.sync("**/*", {
        cwd: source,
    });
    return Promise.resolve("cleaned");
}

function readDistFiles() {
    distFileList = glob.sync("**/*", {
        cwd: distrib,
    });
    return Promise.resolve("cleaned");
}
function parseFiles() {
    distFileList.forEach((el) => {
        if (!srcFileList.includes(el)) {
            console.log(del.sync([distrib + el]));
        }
    });
    return Promise.resolve("cleaned");
}
`}</pre>
		</div>
		<div className={cardClasses}>
			I was curious about the named colors in HTML and how to find which one was
			the closest to any input if you wanted to specifically use named colors
			for a design. I couldn't find anything that would answer that question to
			my satisfaction, so I made Nearest Named Color. This tool lets uses
			JavaScript to let you pick a color and tells you the nearest named color
			in RGB space. Demonstration of the tool finding the nearest named color
			Making this was a helpful first step in learning layout, how HTML and CSS
			deal with color, and using Javascript to affect the content of web pages.
			In order to find the nearest color, I used the following code. I employed
			a simple Euclidian distance formula, calculating the color distance for
			all of the 140 named colors in comparison to the one color selected.
			<pre>{`
function nearestColor(RGB) {
    let regex = /[0-9]+/g;
    let RGBarray = 
        Array.from(regex[Symbol.matchAll](RGB), 
            (x) => x[0]);
    function distance(RGB1, RGB2) {
        return (
            (RGB2[0] - RGB1[0]) ** 2 +
            (RGB2[1] - RGB1[1]) ** 2 +
            (RGB2[2] - RGB1[2]) ** 2
        );
    }
    let closestColor;
    let dist = 195075;
    for (color in colors) {
        newdist = distance(RGBarray, 
                    colors[color][1]);
        if (newdist < dist) {
            dist = newdist;
            closestColor = color;
        }
    }
    return closestColor;
}
`}</pre>
		</div>
	</div>
);

export default Software;
