import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { IProduct, ProductsRedux } from "../../typescript/interfaces/Products";
import { EProductsActions } from "./ProductsActions";

export const initialState: IProduct[] = []

const ProductsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            console.log(state);
            return action.payload.products;
            
        case EProductsActions.SET_PRODUCTS:
            return action.payload;

        default: 
            return state;
    }
}

export default ProductsReducer;