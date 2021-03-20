import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const CardCharacter = props => {
	const [heart, setHeart] = useState("far fa-heart");
	return (
		<div className="col-lg-4 col-12">
			<div className="card m-2 text-white bg-secondary ">
				{/* <img src={props.image} className="card-img-top" alt="..." /> */}
				<div className="card-header">
					<h3 className="card-title">{props.name}</h3>
				</div>
				<div className="card-body">
					<p className="card-text">
						<b>Height:</b> {props.height}
					</p>
					<p className="card-text">
						<b>Mass:</b> {props.mass}
					</p>
					<p className="card-text">
						<b>Birth Year:</b> {props.birth}
					</p>
					<div className=" d-flex justify-content-between">
						<Link to={"/character/" + props.index}>
							<a href="#" className="btn btn-danger">
								Learn more!
							</a>
						</Link>
						<div onClick={() => setHeart("fas fa-heart")}>
							<a href="#" className="btn btn-dark text-white" onClick={props.function}>
								<i className={heart} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CardCharacter.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	birth: PropTypes.string,
	function: PropTypes.func,
	index: PropTypes.number
};
