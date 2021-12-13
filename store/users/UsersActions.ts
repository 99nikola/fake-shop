import { IUser } from "../../typescript/interfaces/Users";

export enum EUsersActions {
    SET_USERS = "SET_USERS",
}

export const setUsers = (users: IUser[]) => ({
    type: EUsersActions.SET_USERS,
    payload: users
});