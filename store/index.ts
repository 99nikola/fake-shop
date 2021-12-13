import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, combineReducers, compose, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import CartsReducer from "./carts/CartsReducer";
import CategoriesReducer from "./categories/CategoriesReducer";
import ProductsReducer from "./products/ProductsReducer";
import UsersReducer from "./users/UsersReducer";

const reducers = combineReducers({
    products: ProductsReducer,
    users: UsersReducer,
    categories: CategoriesReducer,
    carts: CartsReducer
});


const composeEnhancers = typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const makeStore = (context: Context) => createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export const wrapper = createWrapper(makeStore);
