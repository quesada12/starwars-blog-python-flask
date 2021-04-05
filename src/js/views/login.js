import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	const [login, setLogin] = useState("false");

	useEffect(() => {
		setLogin(sessionStorage.getItem("login"));
	}, []);

	const handle_submit = e => {
		e.preventDefault();
		const body = {
			email: email,
			password: password
		};
		fetch(store.api_url + "/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => (res.ok ? successfullLogin() : errorLogin()))
			.catch(err => console.error(err));
	};

	const successfullLogin = async () => {
		sessionStorage.setItem("login", "true");
		setLogin("true");
		const body = {
			email: email,
			password: password
		};
		await fetch(store.api_url + "/user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => sessionStorage.setItem("user", data.id))
			.catch(err => console.error(err));

		await fetch(store.api_url + "/user/" + sessionStorage.getItem("user") + "/favorites", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => createFavorites(data.favorites))
			.catch(err => console.error(err));
	};

	const createFavorites = favorites => {
		favorites.forEach(favorite => {
			actions.addFavoriteAPI(favorite.favorite_name, favorite.favorite_type, favorite.favorite_id, favorite.id);
		});
	};

	const errorLogin = () => {
		alert("User or Password incorrect ");
		console.log(email + " " + password);
	};

	return (
		<div className="container mt-5 col-7">
			<div className="rounded bg-dark text-white text-justify mb-3 p-1 mt-4">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center">Welcome to Star Wars Data Base</h1>
						<hr className="my-4" />
						<form className="px-4" onSubmit={e => handle_submit(e)}>
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									aria-describedby="emailHelp"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="mb-3 text-center">
								<button type="submit" className="btn btn-danger">
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{login == "true" ? <Redirect to="/" /> : null}
		</div>
	);
};
