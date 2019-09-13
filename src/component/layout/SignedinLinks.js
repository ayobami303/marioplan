import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const SignedinLinks = (props) => {
    return(
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink ligthen-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}


export default connect(null, { signOut })(SignedinLinks);