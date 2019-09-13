import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './component/layout/Navbar';
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetails from './component/projects/ProjectDetails';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/projects/CreateProject';
import { connect } from 'react-redux';

function App(props) {
	return (
		<BrowserRouter>
			{ props.isLoaded && <div className="App">
				<Navbar/>
				<Switch>
					<Route exact path='/' component={Dashboard}/>
					<Route path='/project/:id' component={ProjectDetails}/>
					<Route path='/signin' component={SignIn}/>
					<Route path='/signup' component={SignUp}/>
					<Route path='/create' component={CreateProject}/>
				</Switch>
			</div> }
			{ !props.isLoaded && <div><p className='center'>Loading...</p></div>}
		</BrowserRouter>
	);
}

function mapStateToProps(state){
	console.log(state);
	return {
		isLoaded: state.firebase.auth.isLoaded
	}
}


export default connect(mapStateToProps)(App);
