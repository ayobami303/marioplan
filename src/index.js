import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { getFirestore, createFirestoreInstance, reduxFirestore } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./store/reducers/rootReducer";
import firebase from "./config/fbConfig";


// react-redux-firebase config
const rrfConfig = {
    attachAuthIsReady: true,
    userProfile: 'users',
    useFirestoreForProfile: true
};

const middleware = [
    thunk.withExtraArgument({ getFirestore, getFirebase })
    // This is where you add other middleware like redux-observable
];

const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    reduxFirestore(firebase) // redux bindings for firestore
));

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            { ...rrfProps }
        >
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
