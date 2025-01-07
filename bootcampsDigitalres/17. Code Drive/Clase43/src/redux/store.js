import { combineReducers, createStore, applyMiddleware } from "redux";
import carritoReducer from "./carrito/reducer";
import catalogoReducer from "./catalogo/reducer";
import userReducer from "./user/reducer";

import { logger } from 'redux-logger';

/**
state = {
	carrito: {....},
	catalogo: {...},
    user: {...}
}
*/
const rootReducer = combineReducers({
	carrito: carritoReducer,
	catalogo: catalogoReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
