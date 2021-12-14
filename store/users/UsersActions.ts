import { IUser } from "../../typescript/interfaces/Users";

export enum EUsersActions {
    SET_USERS = "SET_USERS",
    FETCH_START = "FETCH_USERS_START",
    FETCH_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_FAIL = "FETCH_USERS_FAIL"
}

export const fetchUsers = () => (
    (dispatch: any) => {
        dispatch(fetchUsersStart());

        fetch("https://fakestoreapi.com/users")
            .then(res => res.json())
            .then(users => dispatch(fetchUsersSuccess(users)))
            .catch(error => dispatch(fetchUsersFail(error)));
    }
);

export const fetchUsersStart = () => ({
    type: EUsersActions.FETCH_START
});

export const fetchUsersSuccess = (users: IUser[]) => ({
    type: EUsersActions.FETCH_SUCCESS,
    payload: users
});

export const fetchUsersFail = (error: any) => ({
    type: EUsersActions.FETCH_FAIL,
    payload: error
});

export const setUsers = (users: IUser[]) => ({
    type: EUsersActions.SET_USERS,
    payload: users
});