import {applyMiddleware, combineReducers, createStore} from "redux";
import MyPageReduser from "./MyPage-Reducer";
import FriendsBarPageReduser from "./FriendsBarPage-Reducer";
import {DialogsPageReducer} from "./DialogsPage-Reducer";
import {UsersPageReducer} from "./UsersPage-Reducer";
import {AuthReduser} from "./Auth-reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let Redusers = combineReducers(
    {
        DialogsPage:DialogsPageReducer,
        MyPage:MyPageReduser,
        FriendsBarPage:FriendsBarPageReduser,
        UserPage:UsersPageReducer,
        auth:AuthReduser,
        form:formReducer,
    }
)

 export const  store = createStore(Redusers,applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof Redusers>

export default store;