import { NextPage } from "next"
import Flex from "../../components/atoms/Flex.styled";
import ProductsList from "../../components/organisms/ProductsList";
import { wrapper } from "../../store";
import { setDefaults } from "../../store/products/ProductsActions";
import { IProduct } from "../../typescript/interfaces/Products";

const Products: NextPage = () => {
    return (
        <Flex>
            <ProductsList />
        </Flex>
    );
}
export const getStaticProps = wrapper.getStaticProps(store => async (context) => {

    const res = await fetch("https://fakestoreapi.com/products");
    const products: IProduct[] = await res.json();

    store.dispatch(setDefaults({
        products: products,
        perPage: 5
    }));

    return ({
        props: {}
    });
});

export default Products;
