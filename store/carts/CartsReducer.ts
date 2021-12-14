import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { ECartsActions } from "./CartsActions";

export const initialState = {
    isFetching: false,
    error: false,
    carts: []
};

const CartsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return ({
                ...state,
                ...action.payload.carts
            });

        case ECartsActions.FETCH_START:
            return ({
                ...state,
                isFetching: true
            });

        case ECartsActions.FETCH_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                error: false,
                carts: action.payload,
            });

        case ECartsActions.FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                carts: action.payload,
            });
       
        case ECartsActions.SET_CARTS:
            return  ({
                ...state,
                carts: action.payload
            });

        default: 
            return state;
    }
}

export default CartsReducer;