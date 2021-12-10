import { NextPage } from "next"
import Link from "next/link";
import { useSelector } from "react-redux";
import { wrapper } from "../../store";
import { setDefaults } from "../../store/products/ProductsActions";
import { IProduct } from "../../typescript/interfaces/Products";

const Products: NextPage = () => {

    const { products, perPage } = useSelector((state: any) => state.products);
    console.log(perPage);
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
    const products: IProduct[] = await res.json();

    store.dispatch(setDefaults({
        products: products,
        perPage: 10
    }));

    return ({
        props: {}
    });
});

export default Products;
