import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ProductBreadcrumb } from "../../../../breadcrumb";
import Breadcrumb from "../../../../components/molecules/Breadcrumb";
import { IProduct } from "../../../../typescript/interfaces/Products";

interface ProductProps {
    product: IProduct
}

const Product: NextPage<ProductProps> = (props) => {
    return (
        <div>
            <Breadcrumb 
                items={ProductBreadcrumb(props.product.id, props.product.category, props.product.title)}
            />
            {props.product.title}
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: IProduct[] = await res.json();

    const paths = products.map(product => ({
        params: {
            productId: product.id.toString(),
            categoryName: encodeURIComponent(product.category)
        }
    }));

    return ({
       paths: paths,
       fallback: false
    });
}

export const getStaticProps: GetStaticProps = async (context) => {
    const productId = context.params?.productId as string;
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();

    return ({
        props: {
            product
        }
    });
}

export default Product;