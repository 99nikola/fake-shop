import { ICartUser } from "../../typescript/interfaces/Cart";

export enum ECartsActions {
    SET_CARTS = "SET_CARTS",
}

export const setCarts = (carts: ICartUser[]) => ({
    type: ECartsActions.SET_CARTS,
    payload: carts
});