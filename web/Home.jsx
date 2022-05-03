import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './businesslogic/landingpage/LandingPage';

function Home() {

	return (
		<React.Suspense fallback="Loading...">
			<Router>
				<Switch>
					<Route path="/">
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</React.Suspense>
	)

}

export default Home;