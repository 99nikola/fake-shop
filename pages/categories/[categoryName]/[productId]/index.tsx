import { GetServerSideProps, NextPage } from "next"
import { IProduct } from "../../../../typescript/interfaces/Products";

interface ProductProps {
    product: IProduct
}

const Product: NextPage<ProductProps> = (props) => {
    return (
        <div>
            {props.product.title}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

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