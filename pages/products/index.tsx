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
                <Link key={product.id} href={`/categories/${encodeURIComponent(product.category)}/${product.id}?${encodeURIComponent(product.title)}`}>
                    <li>{product.title}</li>    
                </Link>
            ))} 
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();


    return ({
        props: {
            products
        }
    });
}

export default Products;
