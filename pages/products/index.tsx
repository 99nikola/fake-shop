import { NextPage } from "next"
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/organisms/Pagination";
import usePagination from "../../hooks/usePagination";
import { wrapper } from "../../store";
import { fetchProducts } from "../../store/products/ProductsActions";
import { IProduct } from "../../typescript/interfaces/Products";

const Products: NextPage = () => {
    const { products, isFetching } = useSelector((state: any) => state.products);
    
    const productsToRender = usePagination({
        items: products
    });

    const ProductsToRender = useMemo(() => (
        isFetching
            ? "Loading"
            : productsToRender.map((product: IProduct) => (
                <Link key={product.id} href={`/categories/${encodeURIComponent(product.category)}/${product.id}?${encodeURIComponent(product.title)}`}>
                    <li>{product.title}</li>    
                </Link>))
    ), [productsToRender, isFetching]);

    return (
        <ul>
            {ProductsToRender}
            <Pagination 
                total={products.length}
            />
        </ul>
    )
}

Products.getInitialProps = wrapper.getInitialPageProps(store => () => {

    const state = store.getState().products;
    if (state.isFetching || state.products.length !== 0)
        return;

    store.dispatch(fetchProducts() as any);
});

export default Products;
