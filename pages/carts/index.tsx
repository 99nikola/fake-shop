import { GetStaticProps, NextPage } from "next";
import { useMemo } from "react";
import { ICartUser } from "../../typescript/interfaces/Cart";

interface CartsProps {
    carts: ICartUser[]
}

const Carts: NextPage<CartsProps> = (props) => {

    const Dates = useMemo(() => (
        props.carts.map(cart => {
            const date = new Date(cart.date);
            return (
                <li key={cart.id + cart.userId}>{date.toDateString()}</li>
            );
        })
    ), [props.carts])

    return (
        <ul>
            {Dates}
        </ul>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch("https://fakestoreapi.com/carts");
    let carts = await response.json();

    console.log(carts);
    
    return ({
        props: {
            carts
        }
    })
}

export default Carts;