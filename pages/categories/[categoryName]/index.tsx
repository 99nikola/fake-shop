import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { useMemo } from "react";
import { CategoryBreadcrumb } from "../../../breadcrumb";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import { IProduct } from "../../../typescript/interfaces/Products";

interface CategoryProps {
    products: IProduct[],
    categoryName: string
}

const Category: NextPage<CategoryProps> = (props) => {

    const CategoryBreadcrumbMemo = useMemo(() => 
        CategoryBreadcrumb(props.categoryName), 
        [props.categoryName]);

    return (
    <>
        <Breadcrumb 
            items={CategoryBreadcrumbMemo}
        />
        <ul>
            {props.products.map((product) => (
                <Link key={product.id} href={"/categories/" + encodeURIComponent(product.category) + "/" + product.id} passHref={true}>
                    <a><li>{product.title}</li></a>
                </Link>    
            ))}
        </ul>
    </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories: string[] = await res.json();

    const paths = categories.map(category => ({
        params: {
            categoryName: category,
        }
    }));

    return ({
       paths: paths,
       fallback: false
    });
}

export const getStaticProps: GetStaticProps = async (context) => {

    const categoryName = context.params?.categoryName;
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
    const products = await res.json();

    return ({
        props: {
            products,
            categoryName
        }
    });
}

export default Category;