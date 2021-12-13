import { NextPage } from "next"
import Flex from "../../components/atoms/Flex.styled";
import ProductsList from "../../components/organisms/ProductsList";
import { wrapper } from "../../store";
import { setProducts } from "../../store/products/ProductsActions";
import { IProduct } from "../../typescript/interfaces/Products";

const Products: NextPage = () => {
    return (
        <Flex>
            <ProductsList />
        </Flex>
    );
}

Products.getInitialProps = wrapper.getInitialPageProps(store => async (context) => {
    
    if (store.getState().products.length !== 0)
        return;

    const res = await fetch("https://fakestoreapi.com/products");
    const products: IProduct[] = await res.json();

    store.dispatch(setProducts(products));
});

// export const getStaticProps = wrapper.getStaticProps(store => async (context) => {

//     console.log(store.getState());
    
//     if (store.getState().products.length === 0) {
//         console.log("fetching");
//         const res = await fetch("https://fakestoreapi.com/products");
//         const products: IProduct[] = await res.json();

//         store.dispatch(setProducts(products));
//     } else {
//         console.log("not fetching");
//     }

//     return ({
//         props: {}
//     });
// });

export default Products;
