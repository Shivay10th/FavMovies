/** @format */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return { color: '#f7c08a', backgroundColor: '#444' };
	} else {
		return { color: '#d1d1d1' };
	}
};
const Navbar = ({ history }) => {
	return (
		<nav id="navbar">
			<div class="container">
				<h1 class="logo">
					<Link to="/discover">FavMovies</Link>
				</h1>
				<ul>
					<li>
						<Link
							style={currentTab(history, '/discover')}
							to="/discover"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							style={currentTab(history, '/popular')}
							to="/popular"
						>
							Popular
						</Link>
					</li>
					<li>
						<Link
							style={currentTab(history, '/latest')}
							to="/latest"
						>
							Latest
						</Link>
					</li>
					<li>
						<Link style={currentTab(history, '/Fav')} to="/fav">
							Fav
						</Link>
					</li>
					<li>
						<Link style={currentTab(history, '/login')} to="/login">
							Login
						</Link>
					</li>
					<li>
						<Link
							style={currentTab(history, '/signup')}
							to="/signup"
						>
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
