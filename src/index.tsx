import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./Redux/Store";


export let rerenderTree = () => {
    ReactDOM.render(<App store={store} dispatch={store.dispatch.bind(store)}/>,  document.getElementById('root'));
}
store.subscribe(rerenderTree)
rerenderTree()
serviceWorker.unregister();
