import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer';

var rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))