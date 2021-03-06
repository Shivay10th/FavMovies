/** @format */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../Auth/index';
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
			<div className="container">
				<h1 className="logo">
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
					{isAuthenticated() && (
						<li>
							<Link style={currentTab(history, '/fav')} to="/fav">
								Fav
							</Link>
						</li>
					)}

					{!isAuthenticated() && (
						<React.Fragment>
							<li>
								<Link
									style={currentTab(history, '/login')}
									to="/login"
								>
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
						</React.Fragment>
					)}
					<li>
						{isAuthenticated() && (
							<span
								className="logout"
								onClick={() => {
									logout(() => {
										history.push('/');
									});
								}}
							>
								Sign Out
							</span>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
