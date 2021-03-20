import React, { useState, useEffect, useContext } from "react";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";
import { SearchBar } from "../component/searchBar";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-4">
			<SearchBar />
			<div className="container bg-dark text-white rounded">
				<hr />
				<h2>Characters</h2>
				<hr />

				<div className="d-flex flex-row flex-nowrap overflow-auto pb-4">
					{store.characters.map((card, index) => {
						let des = false;
						let pos = 0;
						store.favorites.forEach((favorite, index) => {
							if (card.name == favorite.name) {
								des = true;
								pos = favorite.index;
							}
						});

						if (des) {
							return (
								<CardCharacter
									name={card.name}
									height={card.height}
									mass={card.mass}
									birth={card.birth_year}
									key={index}
									index={index}
									function={e => actions.deleteFavorite(pos)}
									heart={"fas fa-heart"}
								/>
							);
						} else {
							return (
								<CardCharacter
									name={card.name}
									height={card.height}
									mass={card.mass}
									birth={card.birth_year}
									key={index}
									index={index}
									function={e => actions.addFavorite(card.name, "c", index)}
									heart={"far fa-heart"}
								/>
							);
						}
					})}
				</div>
			</div>

			<div className="container bg-dark text-white rounded">
				<hr />
				<h2>Planets</h2>
				<hr />

				<div className="d-flex flex-row flex-nowrap overflow-auto pb-4">
					{store.planets.map((card, index) => {
						let des = false;
						let pos = 0;
						store.favorites.forEach((favorite, index) => {
							if (card.name == favorite.name) {
								des = true;
								pos = favorite.index;
							}
						});
						if (des) {
							return (
								<CardPlanet
									name={card.name}
									diameter={card.diameter}
									climate={card.climate}
									terrain={card.terrain}
									key={index}
									index={index}
									function={e => actions.deleteFavorite(pos)}
									heart={"fas fa-heart"}
								/>
							);
						} else {
							return (
								<CardPlanet
									name={card.name}
									diameter={card.diameter}
									climate={card.climate}
									terrain={card.terrain}
									key={index}
									index={index}
									function={e => actions.addFavorite(card.name, "p", index)}
									heart={"far fa-heart"}
								/>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};
