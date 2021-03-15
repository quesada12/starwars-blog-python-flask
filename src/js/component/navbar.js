import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fab fa-galactic-republic" />
					&nbsp; Star Wars
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/starwarssingle">
					<button className="btn btn-primary">Single</button>
				</Link>
			</div>
		</nav>
	);
};
