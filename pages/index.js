import React from "react";
import cards from "../data/homeData.js";
import HomeCard from "../components/HomeCard.js";
import Page from "../components/Page";

const Home = () => (
	<Page title='Emily Bonar - Home'>
		{cards.map((cardData, index) => (
			<HomeCard content={cardData} index={index} key={index} />
		))}
	</Page>
);

export default Home;
