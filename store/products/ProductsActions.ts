import { IProduct } from "../../typescript/interfaces/Products";

export enum EProductsActions {
    SET_PRODUCTS = "SET_PRODUCTS"
}

export const setProducts = (products: IProduct[]) => ({
    type: EProductsActions.SET_PRODUCTS,
    payload: products
});