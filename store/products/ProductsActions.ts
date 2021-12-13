import { IProduct } from "../../typescript/interfaces/Products";

export enum EProductsActions {
    SET_PRODUCTS = "SET_PRODUCTS",
}

export const setProducts = (products: IProduct[]) => ({
    type: EProductsActions.SET_PRODUCTS,
    payload: products
});


export const fetchProducts = () => (
    (disptach: any) => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(products => disptach(setProducts(products)))
            .catch(error => console.error(error));
    }
);