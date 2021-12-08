import { GetStaticProps, NextPage } from "next"
import { IProduct } from "../../typescript/interfaces/Products";

interface ProductsProps {
    products: IProduct[]
}

const Products: NextPage<ProductsProps> = (props) => {

    return (
        <div>
            Products 
        </div>
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
