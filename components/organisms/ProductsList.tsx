import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import { IProduct } from "../../typescript/interfaces/Products";
import Pagination from "../molecules/Pagination";

interface ProductsListProps {
    page: number
}

const ProductsList: React.FC<ProductsListProps> = (props) => {

    const { products, perPage } = useSelector((state: any) => state.products);

    const ProductsToRender = usePagination({
        items: products,
        page: props.page,
        perPage: perPage
    });

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
                currPage={props.page}
                total={products.length}
                perPage={perPage}
            />
        </ul>
    )
}

export default ProductsList;