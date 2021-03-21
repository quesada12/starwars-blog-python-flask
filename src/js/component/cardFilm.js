import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const CardFilm = props => {
	const [background, setBackground] = useState("");

	useEffect(() => {
		switch (props.episode_id) {
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
	}, []);

	return (
		<div className="col-lg-4 col-12">
			<div className="card m-2 text-white bg-secondary ">
				{/* <img src={props.image} className="card-img-top" alt="..." /> */}
				<div className="card-header">
					<img src={background} className="card-img-top" alt="..." />
					<h3 className="card-title">{props.title}</h3>
				</div>
				<div className="card-body">
					<p className="card-text">
						<b>Episode:</b> {props.episode_id}
					</p>
					<p className="card-text">
						<b>Release Date:</b> {props.release_date}
					</p>
					<p className="card-text">
						<b>Director:</b> {props.director}
					</p>
					<div className=" d-flex justify-content-between">
						<Link to={"/film/" + props.index}>
							<a href="#" className="btn btn-danger">
								Learn more!
							</a>
						</Link>

						<a href="#" className="btn btn-dark text-white" onClick={props.function}>
							<i className={props.heart} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

CardFilm.propTypes = {
	title: PropTypes.string,
	episode_id: PropTypes.string,
	release_date: PropTypes.string,
	director: PropTypes.string,
	function: PropTypes.func,
	index: PropTypes.number,
	heart: PropTypes.string
};
