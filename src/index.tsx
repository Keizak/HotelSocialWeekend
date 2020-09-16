import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/Redux-Store";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
