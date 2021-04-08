import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Specie = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [specie, setSpecie] = useState({});
	let charactersMap = "";

	useEffect(() => {
		fetch(store.api_url + "/specie/" + params.id, {
			method: "GET"
		})
			.then(res => res.json())
			.then(data => setSpecie(data))
			.catch(err => console.error(err));
	}, []);

	console.log(specie.characters);

	if (specie.characters != undefined) {
		charactersMap = specie.characters.map((c, i) => {
			return (
				<div className="col-lg-3 col-12 text-center mb-4" key="i">
					<Link to={"/character/" + c.id} className="text-warning">
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
					<div className="col-12">
						<h1 className="text-center">{specie.name}</h1>
						<hr className="my-4" />
						<div className="row">
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Classification</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.classification}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Designation</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.designation}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Average Height</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.average_height}</p>
							</div>
							<div className="col-lg-3 col-12  text-center">
								<h4>Average Lifespan</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.average_lifespan}</p>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Hair Colors</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.hair_colors}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Skin colors</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.skin_colors}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Eye Colors</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.eye_colors}</p>
							</div>
							<div className="col-lg-3 col-12 text-center">
								<h4>Language</h4>
								<hr className="my-1" />
								<p className="text-white-50">{specie.language}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<h2 className="text-center">People</h2>
				<hr className="my-4" />
				<div className="row">{charactersMap}</div>
			</div>

			<div className="text-right">
				<Link to={"/planet/" + specie.planet_id}>
					<a href="#" className="btn btn-danger btn-lg mr-3">
						Go to HomeWorld
					</a>
				</Link>
				<Link to="/">
					<span className="btn-lg btn btn-outline-light" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};
