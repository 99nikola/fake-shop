import { ICartUser } from "../../typescript/interfaces/Cart";

export enum ECartsActions {
    SET_CARTS = "SET_CARTS",
    FETCH_START = "FETCH_CARTS_START",
    FETCH_SUCCESS = "FETCH_CARTS_SUCCESS",
    FETCH_FAIL = "FETCH_CARTS_FAIL"
}

export const fetchCarts = () => (
    (dispatch: any) => {
        dispatch(fetchCartsStart());
        
        fetch("https://fakestoreapi.com/carts")
        .then(res => res.json())
        .then(carts => dispatch(fetchCartsSuccess(carts)))
        .catch(error => dispatch(fetchCartsFail(error)));
    }
);

export const fetchCartsStart = () => ({
    type: ECartsActions.FETCH_START
});

export const fetchCartsSuccess = (categories: string[]) => ({
    type: ECartsActions.FETCH_SUCCESS,
    payload: categories
});

export const fetchCartsFail = (error: any) => ({
    type: ECartsActions.FETCH_FAIL,
    payload: error
});

export const setCarts = (carts: ICartUser[]) => ({
    type: ECartsActions.SET_CARTS,
    payload: carts
});