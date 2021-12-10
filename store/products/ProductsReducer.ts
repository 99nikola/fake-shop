import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { ProductsRedux } from "../../typescript/interfaces/Products";
import { EProductsActions } from "./ProductsActions";

export const initialState: ProductsRedux = {
    products: [],
    perPage: 5
};

const ProductsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return ({
                ...state,
                ...action.payload.products
            });
        case EProductsActions.SET_DEFAULTS: 
            return ({
                ...action.payload
            });
        case EProductsActions.SET_PRODUCTS:
            return ({
                ...state,
                products: action.payload
            });
        case EProductsActions.SET_PER_PAGE:
            return ({
                ...state,
                perPage: action.payload
            })
        default: 
            return state;
    }
}

export default ProductsReducer;