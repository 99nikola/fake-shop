import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { IPagination } from "../../typescript/interfaces/Pagination";
import { PaginationActions } from "./PaginationActions";

const initialState: IPagination = {
    perPage: 5,
    page: 1,
    total: 0
}

const PaginationReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            console.log(state);
            return  ({
                ...state,
                ...action.payload.pagination
            });
        case PaginationActions.SET_PAGINATION:
            return ({
                ...action.payload
            });
        case PaginationActions.SET_PER_PAGE:
            return ({
                ...state,
                perPage: action.payload
            })
        default:
            return state;
    }
}

export default PaginationReducer;