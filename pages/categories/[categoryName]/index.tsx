import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { IProduct } from "../../../typescript/interfaces/Products";

interface CategoryProps {
    products: IProduct[]
}

const Category: NextPage<CategoryProps> = (props) => {
    return (
        <ul>
            {props.products.map((product) => (
                <Link key={product.id} href={`/categories/${product.category}/${product.id}?${encodeURIComponent(product.title)}`}>
                    <li>{product.title}</li>
                </Link>    
            ))}
        </ul>
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
            products
        }
    });
}

export default Category;