import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedinLinks from "../layout/SignedinLinks";
import SignedoutLinks from "../layout/SignedoutLinks";

const Navbar = (props) => {
    const { auth, profile } = props;

    return(
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>  
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                { auth.uid && <SignedinLinks profile={profile}/> }
                { !auth.uid && <SignedoutLinks /> }
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);