import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const { store, actions } = useContext(Context);
	const [login, setLogin] = useState("false");

	const handle_submit = e => {
		e.preventDefault();
		if (password === password2) {
			const body = {
				email: email,
				password: password
			};
			fetch(store.api_url + "/register", {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => (res.ok ? successfullLogin() : errorLogin()))
				.catch(err => console.error(err));
		} else {
			alert("Password does not match");
		}
	};

	const successfullLogin = () => {
		alert("User created");
		setLogin("true");
	};

	const errorLogin = () => {
		alert("User already exists");
		setLogin("true");
	};

	return (
		<div className="container mt-5 col-7">
			<div className="rounded bg-dark text-white text-justify mb-3 p-1 mt-4">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center">Register Form</h1>
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
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Confirm Password
								</label>
								<input
									type="password"
									className="form-control"
									onChange={e => setPassword2(e.target.value)}
								/>
							</div>
							<div className="mb-3 text-center">
								<button type="submit" className="btn btn-danger">
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{login == "true" ? <Redirect to="/login" /> : null}
		</div>
	);
};
