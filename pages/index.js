import React from "react";
import cards from "../data/cardData.js";
import NavBar from "../components/NavBar.js";
import Header from "../components/Header.js";
import HomeCard from "../components/HomeCard.js";

const Home = () => (
	<div className="flex flex-col mb-4">
		<Header title="Emily Bonar" />
		<NavBar />
		{cards.map((cardData, index) => (
			<HomeCard content={cardData} index={index} />
		))}
	</div>
);

export default Home;
