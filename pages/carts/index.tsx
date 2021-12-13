import { NextPage } from "next";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/organisms/Pagination";
import usePagination from "../../hooks/usePagination";
import { wrapper } from "../../store";
import { setCarts } from "../../store/carts/CartsActions";

const Carts: NextPage = () => {

    const carts = useSelector((state: any) => state.carts);
    
    const cartsToRender = usePagination({
        items: carts
    });
    
    const CartsToRender = useMemo(() => (
        cartsToRender.map(cart => {
            const date = new Date(cart.date);
            return (
                <li key={cart.id + cart.userId}>{date.toDateString()}</li>
            );
        })
    ), [cartsToRender]);

    return (
        <ul>
            {CartsToRender}
            <Pagination 
                total={carts.length}
            />
        </ul>
    );
}

Carts.getInitialProps = wrapper.getInitialPageProps(store => async (context) => {
    
    if (store.getState().carts.length !== 0)
        return;

    const res = await fetch("https://fakestoreapi.com/carts");
    let carts = await res.json();
    
    store.dispatch(setCarts(carts));
});

export default Carts;