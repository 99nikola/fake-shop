import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { ICartUser } from "../../typescript/interfaces/Cart";
import { ECartsActions } from "./CartsActions";

export const initialState: ICartUser[] = [];

const CartsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload.carts;
       
        case ECartsActions.SET_CARTS:
            return  action.payload;

        default: 
            return state;
    }
}

export default CartsReducer;