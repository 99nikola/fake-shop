import { NextPage } from "next"
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/organisms/Pagination";
import usePagination from "../../hooks/usePagination";
import { wrapper } from "../../store";
import { setCategories } from "../../store/categories/CategoriesActions";

const Categories: NextPage = () => {

    const categories = useSelector((state: any) => state.categories);

    const categoriesToRender = usePagination({
        items: categories
    });

    const CategoriesToRender = useMemo(() => (
        categoriesToRender.map((category: string) => (
            <Link href={`/categories/${category}`} key={category}>
                <li>{category}</li>
            </Link>
        ))
    ), [categoriesToRender]);

    return (
        <ul>
            {CategoriesToRender} 
            <Pagination 
                total={categories.length}
            />
        </ul>
    );
}

Categories.getInitialProps = wrapper.getInitialPageProps(store => async (context) => {
    
    if (store.getState().categories.length !== 0)
        return;

    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();
    
    store.dispatch(setCategories(categories));
});

export default Categories;