import { NextPage } from "next"
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CategoriesBreadcrumb } from "../../breadcrumb";
import Breadcrumb from "../../components/molecules/Breadcrumb";
import Pagination from "../../components/organisms/Pagination";
import usePagination from "../../hooks/usePagination";
import { wrapper } from "../../store";
import { fetchCategories } from "../../store/categories/CategoriesActions";

const Categories: NextPage = () => {

    const { categories, isFetching } = useSelector((state: any) => state.categories);

    const categoriesToRender = usePagination({
        items: categories
    });

    const CategoriesToRender = useMemo(() => (
        isFetching
            ? "Loading"
            : categoriesToRender.map((category: string) => (
                <Link passHref={true} href={"/categories/" + encodeURIComponent(category)} key={category}>
                    <a><li>{category}</li></a>
                </Link>))
    ), [categoriesToRender, isFetching]);

    return (
    <>
        <Breadcrumb
            items={CategoriesBreadcrumb}
        />
        <ul>
            {CategoriesToRender} 
            <Pagination 
                total={categories.length}
            />
        </ul>
    </>
    );
}

Categories.getInitialProps = wrapper.getInitialPageProps(store => () => {
    
    const state = store.getState().categories;
    if (state.isFetching || state.categories.length !== 0)
        return;
    
    store.dispatch(fetchCategories() as any);
});

export default Categories;