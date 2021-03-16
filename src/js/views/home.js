import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-4">
			<div className="container bg-dark text-white rounded mt-5">
				<hr />
				<h2>Characters</h2>
				<hr />

				<div className="d-flex flex-row flex-nowrap overflow-auto pb-4">
					{store.people.map((card, index) => {
						return (
							<Card
								name={card.name}
								image="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536"
								description={card.name}
								key={index}
								index={index}
							/>
						);
					})}
				</div>
			</div>

			<div className="container bg-dark text-white rounded">
				<hr />
				<h2>Planets</h2>
				<hr />

				<div className="d-flex flex-row flex-nowrap overflow-auto pb-4">
					{store.cards.map((card, index) => {
						return (
							<Card
								name={card.name}
								image={card.image}
								description={card.description}
								key={index}
								index={index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
