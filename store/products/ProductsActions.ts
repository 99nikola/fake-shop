import { IProduct } from "../../typescript/interfaces/Products";

export enum EProductsActions {
    SET_PRODUCTS = "SET_PRODUCTS",
    SET_PER_PAGE = "SET_PER_PAGE",
    SET_DEFAULTS = "SET_DEFAULTS"
}

export const setProducts = (products: IProduct[]) => ({
    type: EProductsActions.SET_PRODUCTS,
    payload: products
});

export const setPerPage = (perPage: number) => ({
    type: EProductsActions.SET_PER_PAGE,
    payload: perPage
})


export const setDefaults = (props: any) => ({
    type: EProductsActions.SET_DEFAULTS,
    payload: {
        ...props
    }
})