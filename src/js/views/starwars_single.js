import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const StarWarsSingle = props => {
	return (
		<div className="container mt-5">
			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<div className="row">
					<div className="col-lg-7 col-12">
						<img
							src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536"
							className="img-fluid"
							alt="test"
						/>
					</div>
					<div className="col-lg-5 col-12 border-left border-danger border-4">
						<h1>Luke Skywalker</h1>
						<hr className="my-4" />
						<p>
							<small>
								Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of
								the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and
								Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended
								the tyranny of the Sith. A generation later, the location of the famed Jedi master was
								one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced
								the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas
								for help. But his solitude would be interrupted – and Luke Skywalker had one final,
								momentous role to play in the struggle between good and evil.
							</small>
						</p>
					</div>
				</div>
			</div>
			<div className="jumbotron bg-dark text-white text-justify">
				<div className="row">
					<div className="col-lg-3 col-12 border-right border-secondary border-4">
						<h4>APPEARANCES</h4>
						<hr className="my-1" />
						<p className="text-white-50">
							Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the
							greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo,
							Luke battled the evil Empire.
						</p>
					</div>
					<div className="col-lg-3 col-12 border-right border-secondary border-4">
						<h4>APPEARANCES</h4>
						<hr className="my-1" />
						<p className="text-white-50">
							Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the
							greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo,
							Luke battled the evil Empire.
						</p>
					</div>
					<div className="col-lg-3 col-12 border-right border-secondary border-4">
						<h4>APPEARANCES</h4>
						<hr className="my-1" />
						<p className="text-white-50">
							Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the
							greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo,
							Luke battled the evil Empire.
						</p>
					</div>
					<div className="col-lg-3 col-12">
						<h4>APPEARANCES</h4>
						<hr className="my-1" />
						<p className="text-white-50">
							Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the
							greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo,
							Luke battled the evil Empire.
						</p>
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
