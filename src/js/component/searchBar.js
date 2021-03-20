import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import Select from "react-select";
import { Context } from "../store/appContext";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const handleChange = selectedOption => {
		history.push(selectedOption.value);
	};

	function customTheme(theme) {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary25: "rgba(220, 53, 69, 0.66)",
				primary: "#6D757D"
			}
		};
	}
	return (
		<div className="container bg-dark text-black rounded mt-5">
			<hr />
			<h2 className="text-white">Search</h2>
			<hr />
			<div className="py-3">
				<Select
					options={store.data}
					placeholder="Select a character or planet"
					variant="success"
					isSearchable
					theme={customTheme}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};
