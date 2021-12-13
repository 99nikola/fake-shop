import { IPagination } from "../../typescript/interfaces/Pagination";

export enum PaginationActions  {
    SET_PAGINATION = "SET_PAGINATION",
    SET_PER_PAGE = "SET_PER_PAGE"
}

export const setPagination = (pagination: IPagination) => ({
    type: PaginationActions.SET_PAGINATION,
    payload: pagination
});

export const setPerPage = (perPage: number) => ({
    type: PaginationActions.SET_PER_PAGE,
    payload: perPage
});