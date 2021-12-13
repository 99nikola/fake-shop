import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { ECategoriesActions } from "./CategoriesActions";

export const initialState: string[] = [];

const CategoriesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload.categories;
       
        case ECategoriesActions.SET_CATEGORIES:
            return  action.payload;

        default: 
            return state;
    }
}

export default CategoriesReducer;