import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { EUsersActions } from "./UsersActions";

export const initialState = {
    isFetching: false,
    error: false,
    users: []
};

const UsersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return ({
                ...state,
                ...action.payload.users
            });

        case EUsersActions.FETCH_START:
            return ({
                ...state,
                isFetching: true
            });

        case EUsersActions.FETCH_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                error: false,
                users: action.payload,
            });

        case EUsersActions.FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            });
       
        case EUsersActions.SET_USERS:
            return  ({
                ...state,
                users: action.payload
            });

        default: 
            return state;
    }
}

export default UsersReducer;