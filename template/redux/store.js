import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import adsIdsReducer from "./reducer";

const rootReducer = combineReducers({adsIdsReducer})
export const Store = createStore(rootReducer, applyMiddleware(thunk));

