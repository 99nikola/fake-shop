import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { IUser } from "../../typescript/interfaces/Users";
import { EUsersActions } from "./UsersActions";

export const initialState: IUser[] = [];

const UsersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload.users;
       
        case EUsersActions.SET_USERS:
            return  action.payload;

        default: 
            return state;
    }
}

export default UsersReducer;