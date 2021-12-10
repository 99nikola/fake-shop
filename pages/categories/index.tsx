import { GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Pagination from "../../components/molecules/Pagination";
import usePagination from "../../hooks/usePagination";
import getPage from "../../utils/getPage";

interface CategoriesProps {
    categories: string[]
}

const Categories: NextPage<CategoriesProps> = (props) => {

    const page = getPage();

    const categoriesToRender = usePagination({
        items: props.categories,
        perPage: 2,
        page
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
                currPage={page}
                perPage={2}
                total={props.categories.length}
            />
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();

    return ({
        props: {
            categories
        }
    });
}

export default Categories;