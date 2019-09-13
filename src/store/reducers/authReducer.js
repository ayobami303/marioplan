const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    if(action.type === 'LOGIN_ERROR'){
        console.log(action.err);
        return { ...state, authError: 'Login failed' };
    }else if (action.type === 'LOGIN_SUCCESS'){
        return { ...state, authError: null };
    }else if(action.type === 'SIGNOUT_SUCCESS'){
        console.log('Sign out sucess');
        return { ...state };
    }else if (action.type === 'SIGNOUT_ERROR'){
        return { ...state };
    }else if(action.type === 'SIGNUP_SUCCESS'){
        console.log('Sign up sucess');
        return { ...state, authError: null };
    }else if (action.type === 'SIGNUP_ERROR'){
        console.log('Sign up error');
        return { ...state, authError: action.err.message };
    }
    return { ...state };
};

export default authReducer;