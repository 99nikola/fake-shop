
export enum ECategoriesActions {
    SET_CATEGORIES = "SET_CATEGORIES",
    FETCH_START = "FETCH_CATEGORIES_START",
    FETCH_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_FAIL = "FETCH_CATEGORIES_FAIL"
}

export const fetchCategories = () => (
    (dispatch: any) => {
        dispatch(fetchCategoriesStart());
        
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(categories => dispatch(fetchCategoriesSuccess(categories)))
            .catch(error => dispatch(fetchCategoriesFail(error)));
    }
);

export const fetchCategoriesStart = () => ({
    type: ECategoriesActions.FETCH_START
});

export const fetchCategoriesSuccess = (categories: string[]) => ({
    type: ECategoriesActions.FETCH_SUCCESS,
    payload: categories
});

export const fetchCategoriesFail = (error: any) => ({
    type: ECategoriesActions.FETCH_FAIL,
    payload: error
});

export const setCategories = (categories: string[]) => ({
    type: ECategoriesActions.SET_CATEGORIES,
    payload: categories
});