import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';

const initialState = cartReducer.initialState;

const middleware = [thunk];

const store =  createStore(cartReducer,initialState, applyMiddleware(...middleware));

export default store;