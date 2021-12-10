import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { IProduct } from "../../typescript/interfaces/Products";
import { EProductsActions } from "./ProductsActions";

export const initialState: IProduct[] = [];

const ProductsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        case EProductsActions.SET_PRODUCTS:
            return action.payload;
        default: 
            return state;
    }
}

export default ProductsReducer;