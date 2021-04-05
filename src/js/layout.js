import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Character } from "./views/character";
import { Planet } from "./views/planet";
import { Specie } from "./views/specie";
import { Film } from "./views/film";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PrivateRoute from "./privateRoute";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/login" component={Login} />
						<PrivateRoute exact path="/" component={Home} />
						<PrivateRoute exact path="/demo" component={Demo} />
						<PrivateRoute exact path="/single/:theid" component={Single} />
						<PrivateRoute exact path="/character/:id" component={Character} />
						<PrivateRoute exact path="/planet/:id" component={Planet} />
						<PrivateRoute exact path="/specie/:id" component={Specie} />
						<PrivateRoute exact path="/film/:id" component={Film} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
