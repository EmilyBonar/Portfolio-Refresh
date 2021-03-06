import React from "react";
import cards from "../data/homeData.js";
import NavBar from "../components/NavBar.js";
import Header from "../components/Header.js";
import HomeCard from "../components/HomeCard.js";

const Home = () => (
	<div className="flex flex-col w-5/6 m-auto mb-4 max-w-7xl ">
		<Header title="Emily Bonar" />
		<NavBar />
		<main>
			{cards.map((cardData, index) => (
				<HomeCard content={cardData} index={index} key={index} />
			))}
		</main>
	</div>
);

export default Home;
