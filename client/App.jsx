import React from 'react';
import {
	Route
} from 'react-router-dom';

const App = () => {
	return (
		<div>
			Hello from app!!!
			<Route exact path="/" component={() => <div>Home</div>} />
			<Route exact path="/test" component={() => <div>test</div>} />
		</div>
	);
};

export default App;