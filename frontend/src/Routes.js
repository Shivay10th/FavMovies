/** @format */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Form/SignUp';
import Login from './components/Form/Login';
import Popular from './components/Popular/popular';
import Latest from './components/Latest/Latest';
import Fav from './components/Fav/Fav';
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/discover" exact component={Home}></Route>
				<Route path="/popular" exact component={Popular}></Route>
				<Route path="/latest" exact component={Latest}></Route>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/signup" exact component={Signup}></Route>
				<Route path="/fav" exact component={Fav}></Route>
				<Route exact path="/">
					<Redirect to="/discover" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
