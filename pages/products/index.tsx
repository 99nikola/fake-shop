import { GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { IProduct } from "../../typescript/interfaces/Products";

interface ProductsProps {
    products: IProduct[]
}

const Products: NextPage<ProductsProps> = (props) => {

    return (
        <ul>
            {props.products.map(product => (
                <Link href={`/categories/${encodeURIComponent(product.category)}/${product.id}?${encodeURIComponent(product.title)}`}>
                    <li key={product.id}>{product.title}</li>    
                </Link>
            ))} 
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();


    return ({
        props: {
            products
        }
    });
}

export default Products;
