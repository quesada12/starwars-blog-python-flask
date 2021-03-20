import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const SearchBar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	return (
		<div className="container bg-dark text-white rounded mt-5">
			<div className="py-3">
				<input type="text" className="form-control bg-dark text-white form-control-lg" placeholder="Search" />
			</div>
			<Dropdown isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>Dropdown</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Header</DropdownItem>
					<DropdownItem>Some Action</DropdownItem>
					<DropdownItem text>Dropdown Item Text</DropdownItem>
					<DropdownItem disabled>Action (disabled)</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Foo Action</DropdownItem>
					<DropdownItem>Bar Action</DropdownItem>
					<DropdownItem>Quo Action</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};
