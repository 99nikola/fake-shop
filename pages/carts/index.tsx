import { NextPage } from "next";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CartsBreadcrumb } from "../../breadcrumb";
import Breadcrumb from "../../components/molecules/Breadcrumb";
import Pagination from "../../components/organisms/Pagination";
import usePagination from "../../hooks/usePagination";
import { wrapper } from "../../store";
import { fetchCarts } from "../../store/carts/CartsActions";

const Carts: NextPage = () => {

    const { carts, isFetching } = useSelector((state: any) => state.carts);
    
    const cartsToRender = usePagination({
        items: carts
    });
    
    const CartsToRender = useMemo(() => (
        isFetching
            ? "Loading"
            : cartsToRender.map(cart => {
                const date = new Date(cart.date);
                return (
                    <li key={cart.id + cart.userId}>{date.toDateString()}</li>
                )})
    ), [cartsToRender, isFetching]);

    return (
    <>
        <Breadcrumb 
            items={CartsBreadcrumb}
        />
        <ul>
            {CartsToRender}
            <Pagination 
                total={carts.length}
            />
        </ul>
    </>
    );
}

Carts.getInitialProps = wrapper.getInitialPageProps(store => () => {
    
    const state = store.getState().carts;
    if (state.isFetching || state.carts.length !== 0)
        return;
    
    store.dispatch(fetchCarts() as any);
});

export default Carts;