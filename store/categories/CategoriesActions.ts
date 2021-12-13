
export enum ECategoriesActions {
    SET_CATEGORIES = "SET_CATEGORIES",
}

export const setCategories = (categories: string[]) => ({
    type: ECategoriesActions.SET_CATEGORIES,
    payload: categories
});