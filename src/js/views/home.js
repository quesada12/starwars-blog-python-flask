import React from "react";
import { Card } from "../component/card";

export const Home = () => {
	const cards = [
		{
			name: "Luke Skywalker",
			image:
				"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
		},
		{
			name: "Luke Skywalker",
			image:
				"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
		},
		{
			name: "Luke Skywalker",
			image:
				"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
		},
		{
			name: "Luke Skywalker",
			image:
				"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
		},
		{
			name: "Luke Skywalker",
			image:
				"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
		},
		{
			name: "Luke Skywalker",
			image:
				"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
		}
	];

	const cardsMap = cards.map((card, index) => {
		return <Card name={card.name} image={card.image} description={card.description} key={index} />;
	});

	return (
		<div className="mt-4">
			<div className="container bg-dark text-white rounded mt-5">
				<hr />
				<h2>Characters</h2>
				<hr />
				<div className="container overflow-auto pb-4">
					<div className="d-flex flex-row flex-nowrap">{cardsMap}</div>
				</div>
			</div>

			<div className="container bg-dark text-white rounded">
				<hr />
				<h2>Planets</h2>
				<hr />
				<div className="container overflow-auto pb-4">
					<div className="d-flex flex-row flex-nowrap">{cardsMap}</div>
				</div>
			</div>
		</div>
	);
};
