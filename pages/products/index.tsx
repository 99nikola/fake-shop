import { NextPage } from "next"
import Flex from "../../components/atoms/Flex.styled";
import ProductsList from "../../components/organisms/ProductsList";
import { wrapper } from "../../store";
import { fetchProducts } from "../../store/products/ProductsActions";

const Products: NextPage = () => {
    return (
        <Flex>
            <ProductsList />
        </Flex>
    );
}

Products.getInitialProps = wrapper.getInitialPageProps(store => () => {

    const state = store.getState().products;
    if (state.isFetching || state.products.length !== 0)
        return;

    store.dispatch(fetchProducts() as any);
});

export default Products;
