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
	const [background, setBackground] = useState("");

	useEffect(() => {
		setPlanets(actions.lookPlanets(store.films[params.id].planets));
		setCharacters(actions.lookCharacters(store.films[params.id].characters));
		setSpecies(actions.lookSpecies(store.films[params.id].species));
		setFilmPicture(store.films[params.id].episode_id);
	}, []);

	const charactersMap = characters.map((c, i) => {
		return (
			<div className="col-lg-3 col-12 text-center mb-4" key="i">
				<Link to={"/character/" + c.index} className="text-warning">
					<h5>{c.name}</h5>
				</Link>
			</div>
		);
	});

	const planetsMap = planets.map((c, i) => {
		return (
			<div className="col-lg-3 col-12 text-center mb-4" key="i">
				<Link to={"/character/" + c.index} className="text-warning">
					<h5>{c.name}</h5>
				</Link>
			</div>
		);
	});

	const speciesMap = species.map((c, i) => {
		return (
			<div className="col-lg-3 col-12 text-center mb-4" key="i">
				<Link to={"/character/" + c.index} className="text-warning">
					<h5>{c.name}</h5>
				</Link>
			</div>
		);
	});

	const setFilmPicture = episode => {
		switch (episode) {
			case 1:
				setBackground("../../img/f1.jpg");
				break;
			case 2:
				setBackground("../../img/f2.jpg");
				break;
			case 3:
				setBackground("../../img/f3.jpg");
				break;
			case 4:
				setBackground("../../img/f4.jpg");
				break;
			case 5:
				setBackground("../../img/f5.jpg");
				break;
			case 6:
				setBackground("../../img/f6.jpg");
				break;
		}
	};

	return (
		<div className="container mt-5">
			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<div className="row">
					<h1 className="text-center">
						{"Episode " + store.films[params.id].episode_id + ": " + store.films[params.id].title}
					</h1>
					<hr className="my-4" />
				</div>
				<div className="row">
					<div className="col-lg-7 col-12">
						<img src={background} className="img-fluid" alt="test" />
					</div>
					<div className="col-lg-5 col-12 border-left border-danger border-4">
						<h1>Opening</h1>
						<hr className="my-4" />
						<p>{store.films[params.id].opening_crawl}</p>
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
								<p className="text-white-50">{store.films[params.id].producer}</p>
							</div>
							<div className="col-lg-4 col-12 border-right border-secondary border-4 text-center">
								<h4>Director</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.films[params.id].director}</p>
							</div>
							<div className="col-lg-4 col-12 border-right border-secondary border-4 text-center">
								<h4>Release Date</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.films[params.id].release_date}</p>
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
