import { combineReducers, createStore } from "redux";
import carritoReducer from "./carrito/reducer";
import catalogoReducer from "./catalogo/reducer";

/**
state = {
	carrito: {....},
	catalogo: {...}
}
*/
const rootReducer = combineReducers({
	carrito: carritoReducer,
	catalogo: catalogoReducer
});

const store = createStore(rootReducer);

export default store;
