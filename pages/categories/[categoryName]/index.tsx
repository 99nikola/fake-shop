import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { IProduct } from "../../../typescript/interfaces/Products";

interface CategoryProps {
    products: IProduct[]
}

const Category: NextPage<CategoryProps> = (props) => {
    return (
        <ul>
            {props.products.map((product) => (
                <Link key={product.id} href={`/categories/${product.category}/${product.id}`}>
                    <li>{product.title}</li>
                </Link>    
            ))}
        </ul>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const categoryName = context.params?.categoryName;
    const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
    const products = await response.json();

    return ({
        props: {
            products
        }
    });
}

export default Category;