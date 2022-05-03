import React, {useState, useEffect} from 'react';
import Home from './Home.jsx';
import store from './../libs/flux/store';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';


function App() {
    return (<>
        <Provider store={store}>
            <Home />
        </Provider>
    </>)

}

export default hot(App);