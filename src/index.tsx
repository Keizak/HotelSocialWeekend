import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {AddPost, ChangeNewPostText, state, stateType, subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderTree = () => {
    ReactDOM.render(<App state={state}
                         AddPost={AddPost}
                         ChangeNewPostText={ChangeNewPostText}
    />,  document.getElementById('root'));
}
subscribe(rerenderTree)
rerenderTree()
serviceWorker.unregister();
