import React, { useState, useEffect, useContext } from "react";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";
import { CardSpecie } from "../component/cardSpecie";
import { CardFilm } from "../component/cardFilm";
import { SearchBar } from "../component/searchBar";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-4">
			<SearchBar />

			<div className="container bg-dark text-white rounded">
				<hr />
				<h2>Films</h2>
				<hr />

				<div className="d-flex flex-row flex-nowrap overflow-auto pb-4">
					{store.films.map((card, index) => {
						let des = false;
						let fav = {};
						store.favorites.forEach((favorite, index) => {
							if ("Episode " + card.episode_id == favorite.favorite_name) {
								des = true;
								fav = {
									favorite_name: favorite.favorite_name,
									favorite_type: favorite.favorite_type,
									favorite_id: favorite.favorite_id,
									user_id: sessionStorage.getItem("user")
								};
							}
						});
						if (des) {
							return (
								<CardFilm
									title={card.title}
									episode_id={card.episode_id}
									release_date={card.release_date}
									director={card.director}
									key={index}
									index={card.id}
									function={e => actions.deleteFavorite(fav)}
									heart={"fas fa-heart"}
								/>
							);
						} else {
							return (
								<CardFilm
									title={card.title}
									episode_id={card.episode_id}
									release_date={card.release_date}
									director={card.director}
									key={index}
									index={card.id}
									function={e => actions.addFavoriteAPI("Episode " + card.episode_id, "f", card.id)}
									heart={"far fa-heart"}
								/>
							);
						}
					})}
				</div>
			</div>

			<div className="container bg-dark text-white rounded">
				<hr />
				<h2>Characters</h2>
				<hr />

				<div className="d-flex flex-row flex-nowrap overflow-auto pb-4">
					{store.characters.map((card, index) => {
						let des = false;
						let fav = {};
						store.favorites.forEach((favorite, index) => {
							if (card.name == favorite.favorite_name) {
								des = true;
								fav = {
									favorite_name: favorite.favorite_name,
									favorite_type: favorite.favorite_type,
									favorite_id: favorite.favorite_id,
									user_id: sessionStorage.getItem("user")
								};
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
									index={card.id}
									function={e => actions.deleteFavorite(fav)}
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
									index={card.id}
									function={e => actions.addFavoriteAPI(card.name, "c", card.id)}
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
						let fav = {};
						store.favorites.forEach(favorite => {
							if (card.name === favorite.favorite_name) {
								des = true;
								fav = {
									favorite_name: favorite.favorite_name,
									favorite_type: favorite.favorite_type,
									favorite_id: favorite.favorite_id,
									user_id: sessionStorage.getItem("user")
								};
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
									index={card.id}
									function={e => actions.deleteFavorite(fav)}
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
									index={card.id}
									function={e => actions.addFavoriteAPI(card.name, "p", card.id)}
									heart={"far fa-heart"}
								/>
							);
						}
					})}
				</div>
			</div>

			<div className="container bg-dark text-white rounded">
				<hr />
				<h2>Species</h2>
				<hr />

				<div className="d-flex flex-row flex-nowrap overflow-auto pb-4">
					{store.species.map((card, index) => {
						let des = false;
						let fav = {};
						store.favorites.forEach((favorite, index) => {
							if (card.name == favorite.favorite_name) {
								des = true;
								fav = {
									favorite_name: favorite.favorite_name,
									favorite_type: favorite.favorite_type,
									favorite_id: favorite.favorite_id,
									user_id: sessionStorage.getItem("user")
								};
							}
						});
						if (des) {
							return (
								<CardSpecie
									name={card.name}
									language={card.language}
									classification={card.classification}
									average_lifespan={card.average_lifespan}
									key={index}
									index={card.id}
									function={e => actions.deleteFavorite(fav)}
									heart={"fas fa-heart"}
								/>
							);
						} else {
							return (
								<CardSpecie
									name={card.name}
									language={card.language}
									classification={card.classification}
									average_lifespan={card.average_lifespan}
									key={index}
									index={card.id}
									function={e => actions.addFavoriteAPI(card.name, "s", card.id)}
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
