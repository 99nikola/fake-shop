import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Flex from "../atoms/Flex.styled";

interface PaginationProps {
    currPage: number,
    productsLength: number
}

const Pagination: React.FC<PaginationProps> = (props) => {

    const { perPage } = useSelector((state: any) => state.products);
    const numberOfButtons = useMemo(() => Math.ceil(props.productsLength / perPage), [props.productsLength, perPage]);
    const router = useRouter();

    const Buttons = useMemo(() => {
        let buttons = [];
        for (let i=1; i<=numberOfButtons; i++)
            buttons.push((
                <Link key={i} href={`${router.pathname}?page=${i}`}>
                    <button>{i}</button>
                </Link>
            ));
        return buttons;
    }, [numberOfButtons, router.pathname]);

    return (
        <Flex>
            {Buttons}
        </Flex>
    )
}

export default Pagination;