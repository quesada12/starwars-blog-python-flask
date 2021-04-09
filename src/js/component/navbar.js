import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [total, setTotal] = useState(0);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	const [login, setLogin] = useState(sessionStorage.getItem("login"));

	// useEffect(() => {
	// 	setLogin(sessionStorage.getItem("login"));
	// }, []);

	useEffect(() => {
		setTotal(store.favorites.length);
		setLogin(sessionStorage.getItem("login"));
	});

	const logOut_handle = async e => {
		await sessionStorage.setItem("login", "false");
		setLogin(sessionStorage.getItem("login"));
		actions.cleanFavorites();
	};

	let items = store.favorites.map((element, index) => {
		let fav = {
			favorite_name: element.favorite_name,
			favorite_type: element.favorite_type,
			favorite_id: element.favorite_id,
			user_id: sessionStorage.getItem("user")
		};
		if (element.favorite_type == "c") {
			return (
				<div>
					<DropdownItem key={index}>
						<div className="d-flex justify-content-between">
							<Link to={"/character/" + element.favorite_id}>
								<button type="button" className="btn btn-link text-dark  ">
									{element.favorite_name}
								</button>
							</Link>
							&nbsp;
							<button
								type="button"
								className="btn btn-link text-danger"
								onClick={e => actions.deleteFavorite(fav)}>
								<i className="far fa-trash-alt" />
							</button>
						</div>
					</DropdownItem>
					<DropdownItem divider />
				</div>
			);
		} else {
			if (element.favorite_type == "p") {
				return (
					<div>
						<DropdownItem key={index}>
							<div className="d-flex justify-content-between">
								<Link to={"/planet/" + element.favorite_id}>
									<button type="button" className="btn btn-link text-dark ">
										{element.favorite_name}
									</button>
								</Link>
								&nbsp;
								<button
									type="button"
									className="btn btn-link text-danger"
									onClick={e => actions.deleteFavorite(fav)}>
									<i className="far fa-trash-alt" />
								</button>
							</div>
						</DropdownItem>
						<DropdownItem divider />
					</div>
				);
			} else {
				if (element.favorite_type == "s") {
					return (
						<div>
							<DropdownItem key={index}>
								<div className="d-flex justify-content-between">
									<Link to={"/specie/" + element.favorite_id}>
										<button type="button" className="btn btn-link text-dark ">
											{element.favorite_name}
										</button>
									</Link>
									&nbsp;
									<button
										type="button"
										className="btn btn-link text-danger"
										onClick={e => actions.deleteFavorite(fav)}>
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
									<Link to={"/film/" + element.favorite_id}>
										<button type="button" className="btn btn-link text-dark ">
											{element.favorite_name}
										</button>
									</Link>
									&nbsp;
									<button
										type="button"
										className="btn btn-link text-danger"
										onClick={e => actions.deleteFavorite(fav)}>
										<i className="far fa-trash-alt" />
									</button>
								</div>
							</DropdownItem>
							<DropdownItem divider />
						</div>
					);
				}
			}
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
				{login == "true" ? (
					<div className="d-flex justify-content-between">
						<Dropdown isOpen={dropdownOpen} toggle={toggle}>
							<DropdownToggle caret>
								Favorites &nbsp;
								<span className="badge badge-danger badge-pill">{total}</span>
							</DropdownToggle>
							<DropdownMenu>{items}</DropdownMenu>
						</Dropdown>
						<Link to={"/login"} className="ml-2">
							<a href="#" className="btn btn-danger" onClick={e => logOut_handle(e)}>
								Logout
							</a>
						</Link>
					</div>
				) : (
					<Link to={"/register"} className="ml-2">
						<a href="#" className="btn btn-danger">
							Register
						</a>
					</Link>
				)}
			</div>
		</nav>
	);
};
