import { useRouter } from "next/router";
import { useMemo } from "react";
import Flex from "../atoms/Flex.styled";
import PaginationLink from "./PaginationLink";

interface PaginationProps {
    currPage: number,
    total: number,
    perPage: number
}

const Pagination: React.FC<PaginationProps> = (props) => {

    const numberOfButtons = useMemo(() => Math.ceil(props.total / props.perPage), [props.total, props.perPage]);
    const router = useRouter();

    const Buttons = useMemo(() => {
        let buttons = [];
        for (let i=1; i<=numberOfButtons; i++)
            buttons.push((
                <PaginationLink 
                    key={i}
                    page={i}
                    path={router?.pathname}
                />
            ));
        return buttons;
    }, [numberOfButtons, router?.pathname]);

    return (
        <Flex margin="10px">
            {Buttons}
        </Flex>
    )
}

export default Pagination;