import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { ECategoriesActions } from "./CategoriesActions";

export const initialState = {
    isFetching: false,
    error: false,
    categories: []
};

const CategoriesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return ({
                ...state,
                ...action.payload.categories
            });

        case ECategoriesActions.FETCH_START:
            return ({
                ...state,
                isFetching: true
            });

        case ECategoriesActions.FETCH_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                error: false,
                categories: action.payload,
            });

        case ECategoriesActions.FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            });
       
        case ECategoriesActions.SET_CATEGORIES:
            return  ({
                ...state,
                categories: action.payload
            });

        default: 
            return state;
    }
}

export default CategoriesReducer;