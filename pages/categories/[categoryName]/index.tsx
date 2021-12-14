import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { CategoryBreadcrumb } from "../../../breadcrumb";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import { IProduct } from "../../../typescript/interfaces/Products";

interface CategoryProps {
    products: IProduct[],
    categoryName: string
}

const Category: NextPage<CategoryProps> = (props) => {
    return (
    <>
        <Breadcrumb 
            items={CategoryBreadcrumb(props.categoryName)}
        />
        <ul>
            {props.products.map((product) => (
                <Link key={product.id} href={"/categories/" + encodeURIComponent(product.category) + "/" + product.id}>
                    <li>{product.title}</li>
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
            categoryName: encodeURIComponent(category),
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