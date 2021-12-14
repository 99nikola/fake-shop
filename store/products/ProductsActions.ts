import { IProduct } from "../../typescript/interfaces/Products";

export enum EProductsActions {
    SET_PRODUCTS = "SET_PRODUCTS",
    FETCH_START = "FETCH_PRODUCTS_START",
    FETCH_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_FAIL = "FETCH_PRODUCTS_FAIL"
}

export const fetchProducts = () => (
    (dispatch: any) => {
        dispatch(fetchProductsStart());
        
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(products => dispatch(fetchProductsSuccess(products)))
            .catch(error => dispatch(fetchProductsFail(error)));
    }
);

export const fetchProductsStart = () => ({
    type: EProductsActions.FETCH_START
});

export const fetchProductsSuccess = (products: IProduct[]) => ({
    type: EProductsActions.FETCH_SUCCESS,
    payload: products
});

export const fetchProductsFail = (error: any) => ({
    type: EProductsActions.FETCH_FAIL,
    payload: error
});

export const setProducts = (products: IProduct[]) => ({
    type: EProductsActions.SET_PRODUCTS,
    payload: products
});