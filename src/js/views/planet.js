import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container mt-5">
			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center">{store.planets[params.id].name}</h1>
						<hr className="my-4" />
						<div className="row">
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Diameter</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].diameter}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Rotation Period</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].rotation_period}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Orbital Period</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].orbital_period}</p>
							</div>
							<div className="col-lg-3 col-12  text-center">
								<h4>Gravity</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].gravity}</p>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Population</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].population}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Climate</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].climate}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Terrain</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].terrain}</p>
							</div>
							<div className="col-lg-3 col-12 text-center">
								<h4>Surface Water</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.planets[params.id].surface_water}</p>
							</div>
						</div>
					</div>
				</div>
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
