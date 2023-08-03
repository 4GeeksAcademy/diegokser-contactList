import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<p className="navbar-brand mb-0 h1">Contact book</p>
			</Link>
			<div className="ml-auto">
				<Link to="/register">
					<button className="btn btn-navbar">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};
