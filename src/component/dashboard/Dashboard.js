import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";


class Dashboard extends Component {
    render(){
        const { projects, auth, notifications } = this.props;
        if(!auth.uid){ return (<Redirect to='/signin'/>)};

        return(
            <div className='dashboard container'>
                <div className='row'>
                    <div className='s12 m6 col'>
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className='s12 m5 offset-m1 col'>
                        <Notifications notifications = {notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);