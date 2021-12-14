import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { EProductsActions } from "./ProductsActions";

export const initialState = {
    isFetching: false,
    error: false,
    products: []
};

const ProductsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return ({
                ...state,
                ...action.payload.products
            });

        case EProductsActions.FETCH_START:
            return ({
                ...state,
                isFetching: true
            });

        case EProductsActions.FETCH_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                error: false,
                products: action.payload,
            });

        case EProductsActions.FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            });
       
        case EProductsActions.SET_PRODUCTS:
            return  {
                ...state,
                products: action.payload
            };

        default: 
            return state;
    }
}

export default ProductsReducer;