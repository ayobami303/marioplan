import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signUp } from "../../store/actions/authActions";

class SignUp extends Component{
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.id] : e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
    }


    render(){
        const { auth, authError } = this.props;
        if(auth.uid){ return (<Redirect to='/'/>)};

        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={this.handleChange} type='email' id='email'/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.handleChange} type='password' id='password'/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input onChange={this.handleChange} type='text' id='firstname'/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input onChange={this.handleChange} type='text' id='lastname'/>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



function mapStateToProps(state){
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps, { signUp })(SignUp);