import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Film = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [planets, setPlanets] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [species, setSpecies] = useState([]);

	const [film, setFilm] = useState({});
	let charactersMap = "";
	let planetsMap = "";
	let speciesMap = "";

	useEffect(() => {
		fetch(store.api_url + "/film/" + params.id, {
			method: "GET"
		})
			.then(res => res.json())
			.then(data => setFilm(data))
			.catch(err => console.error(err));
	}, []);

	if (film.characters != undefined) {
		charactersMap = film.characters.map((c, i) => {
			return (
				<div className="col-lg-3 col-12 text-center mb-4" key="i">
					<Link to={"/character/" + c.id} className="text-warning">
						<h5>{c.name}</h5>
					</Link>
				</div>
			);
		});
	}

	if (film.planets != undefined) {
		planetsMap = film.planets.map((c, i) => {
			return (
				<div className="col-lg-3 col-12 text-center mb-4" key="i">
					<Link to={"/planet/" + c.id} className="text-warning">
						<h5>{c.name}</h5>
					</Link>
				</div>
			);
		});
	}

	if (film.species != undefined) {
		speciesMap = film.species.map((c, i) => {
			return (
				<div className="col-lg-3 col-12 text-center mb-4" key="i">
					<Link to={"/specie/" + c.id} className="text-warning">
						<h5>{c.name}</h5>
					</Link>
				</div>
			);
		});
	}

	return (
		<div className="container mt-5">
			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<div className="row">
					<h1 className="text-center col-12">
						{"Episode " + film.episode_id + ": " + film.title}
						<hr className="my-4" />
					</h1>
				</div>
				<div className="row">
					<div className="col-lg-12 col-12">
						<p>{film.opening}</p>
					</div>
				</div>
			</div>

			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<div className="row">
					<div className="col-12">
						<div className="row">
							<div className="col-lg-4 col-12 border-right border-secondary border-4 text-center">
								<h4>Producer</h4>
								<hr className="my-1" />
								<p className="text-white-50">{film.producer}</p>
							</div>
							<div className="col-lg-4 col-12 border-right border-secondary border-4 text-center">
								<h4>Director</h4>
								<hr className="my-1" />
								<p className="text-white-50">{film.director}</p>
							</div>
							<div className="col-lg-4 col-12 text-center">
								<h4>Release Date</h4>
								<hr className="my-1" />
								<p className="text-white-50">{film.release_date}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<h2 className="text-center">Characters</h2>
				<hr className="my-4" />
				<div className="row">{charactersMap}</div>
			</div>

			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<h2 className="text-center">Planets</h2>
				<hr className="my-4" />
				<div className="row">{planetsMap}</div>
			</div>

			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<h2 className="text-center">Species</h2>
				<hr className="my-4" />
				<div className="row">{speciesMap}</div>
			</div>

			<div className="text-right">
				<Link to="/">
					<span className="btn-lg btn btn-outline-light" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};
