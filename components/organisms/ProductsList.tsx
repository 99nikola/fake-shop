import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { usePage } from "../../hooks/usePageNumber";
import { IProduct } from "../../typescript/interfaces/Products";
import Pagination from "../molecules/Pagination";

const ProductsList: React.FC = () => {

    const { products, perPage } = useSelector((state: any) => state.products);
    const page = usePage();

    const ProductsToRender = useMemo(() => {
        const productsToRender = [];

        for (let i=(page-1) * perPage; i<page * perPage; i++) 
            productsToRender.push(products[i]);

        return productsToRender; 
    }, [products, perPage, page]);

    const Products = useMemo(() => (
        ProductsToRender.map((product: IProduct) => (
            <Link key={product.id} href={`/categories/${encodeURIComponent(product.category)}/${product.id}?${encodeURIComponent(product.title)}`}>
                <li>{product.title}</li>    
            </Link>
        ))
    ), [ProductsToRender]);

    return (
        <ul>
            {Products}
            <Pagination 
                currPage={page}
                productsLength={products.length}
            />
        </ul>
    )
}

export default ProductsList;