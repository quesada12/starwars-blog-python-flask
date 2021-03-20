import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [total, setTotal] = useState(0);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	useEffect(() => {
		setTotal(store.favorites.length);
	});

	let items = store.favorites.map((element, index) => {
		if (element.type == "c") {
			return (
				<div>
					<DropdownItem key={index}>
						<div className="d-flex justify-content-between">
							<Link to={"/character/" + element.index}>
								<button type="button" className="btn btn-outline-primary btn-sm">
									{element.name}
								</button>
							</Link>
							&nbsp;
							<button
								type="button"
								className="btn btn-outline-danger btn-sm"
								onClick={e => actions.deleteFavorite(index)}>
								<i className="far fa-trash-alt" />
							</button>
						</div>
					</DropdownItem>
					<DropdownItem divider />
				</div>
			);
		} else {
			return (
				<div>
					<DropdownItem key={index}>
						<div className="d-flex justify-content-between">
							<Link to={"/planet/" + element.index}>
								<button type="button" className="btn btn-outline-primary btn-sm">
									{element.name}
								</button>
							</Link>
							&nbsp;
							<button
								type="button"
								className="btn btn-outline-danger btn-sm"
								onClick={e => actions.deleteFavorite(index)}>
								<i className="far fa-trash-alt" />
							</button>
						</div>
					</DropdownItem>
					<DropdownItem divider />
				</div>
			);
		}
	});

	return (
		<nav className="navbar navbar-dark bg-dark mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fab fa-galactic-republic" />
					&nbsp; Star Wars
				</span>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/starwarssingle">
					<button className="btn btn-primary">Favorites </button>
				</Link> */}

				{/* <span class="badge badge-primary badge-pill">14</span> */}
				<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle caret>
						Favorites &nbsp;
						<span className="badge badge-danger badge-pill">{total}</span>
					</DropdownToggle>
					<DropdownMenu>{items}</DropdownMenu>
				</Dropdown>
			</div>
		</nav>
	);
};
