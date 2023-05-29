import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// const Home = lazy(() => import('./pages/home.js'));
// const CommentList = lazy(() => import('./pages/commentList.js'));
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Antd from './pages/antd';
import Canvas from './pages/canvas';

const App = () => {
	return (
		<Router>
			<Route exact  path="/" component={Home}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/antd" component={Antd}></Route>
			<Route path="/canvas" component={Canvas}></Route>
		</Router>
	)
}

export default App;