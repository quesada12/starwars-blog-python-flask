import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Card = props => {
	return (
		<div className="col-lg-4 col-12">
			<div className="card m-2 text-white bg-secondary ">
				<img src={props.image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
					<div className=" d-flex justify-content-between">
						<Link to="/starwarssingle">
							<a href="#" className="btn btn-danger">
								Learn more!
							</a>
						</Link>

						<a href="#" className="btn btn-dark text-white">
							<i className="far fa-heart" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string
};
