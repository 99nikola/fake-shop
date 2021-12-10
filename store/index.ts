import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, combineReducers, compose, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import ProductsReducer, { initialState } from "./products/ProductsReducer";

const reducers = combineReducers({
    products: ProductsReducer
});


const composeEnhancers = typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const makeStore = (context: Context) => createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export const wrapper = createWrapper(makeStore);
