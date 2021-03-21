import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import f4 from "../../img/f1.jpg";
import f5 from "../../img/f2.jpg";
import f6 from "../../img/f3.jpg";
import f1 from "../../img/f4.jpg";
import f2 from "../../img/f5.jpg";
import f3 from "../../img/f6.jpg";

export const CardFilm = props => {
	const [background, setBackground] = useState("");

	useEffect(() => {
		switch (props.episode_id) {
			case 1:
				setBackground(f1);
				break;
			case 2:
				setBackground(f2);
				break;
			case 3:
				setBackground(f3);
				break;
			case 4:
				setBackground(f4);
				break;
			case 5:
				setBackground(f5);
				break;
			case 6:
				setBackground(f6);
				break;
		}
	}, []);

	return (
		<div className="col-lg-4 col-12">
			<div className="card m-2 text-white bg-secondary ">
				{/* <img src={props.image} className="card-img-top" alt="..." /> */}

				<img src={background} className="card-img-top" alt="..." />
				<div className="card-header">
					<h4 className="card-title">{props.title}</h4>
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
