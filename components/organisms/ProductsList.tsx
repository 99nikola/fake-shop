import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import { IProduct } from "../../typescript/interfaces/Products";
import Pagination from "./Pagination";

const ProductsList: React.FC = () => {

    const { products } = useSelector((state: any) => state.products);
    
    const productsToRender = usePagination({
        items: products
    });

    const ProductsToRender = useMemo(() => (
        productsToRender.map((product: IProduct) => (
            <Link key={product.id} href={`/categories/${encodeURIComponent(product.category)}/${product.id}?${encodeURIComponent(product.title)}`}>
                <li>{product.title}</li>    
            </Link>
        ))
    ), [productsToRender]);

    return (
        <ul>
            {ProductsToRender}
            <Pagination 
                total={products.length}
            />
        </ul>
    )
}

export default ProductsList;