import { GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { useSelector } from "react-redux";
import { wrapper } from "../../store";
import { setProducts } from "../../store/products/ProductsActions";
import { IProduct } from "../../typescript/interfaces/Products";

const Products: NextPage = () => {

    const { products } = useSelector((state: any) => state.products);
    return (
        <ul>
            {products.map((product: IProduct) => (
                <Link key={product.id} href={`/categories/${encodeURIComponent(product.category)}/${product.id}?${encodeURIComponent(product.title)}`}>
                    <li>{product.title}</li>    
                </Link>
            ))} 
        </ul>
    );
}
export const getStaticProps = wrapper.getStaticProps(store => async (context) => {

    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    store.dispatch(setProducts(products));

    return ({
        props: {}
    });
});

export default Products;
