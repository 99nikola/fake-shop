import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Flex from "../atoms/Flex.styled";
import PaginationLink from "./PaginationLink";
import PerPage from "./PerPage";

interface PaginationProps {
    total: number,
    currPage?: number
}

const Pagination: React.FC<PaginationProps> = (props) => {

    const router = useRouter();
    const pagination = useSelector((state: any) => state.pagination);

    const numberOfButtons = useMemo(() => Math.ceil(props.total / pagination.perPage), [props.total, pagination.perPage]);

    const Buttons = useMemo(() => {
        let buttons = [];
        for (let i=1; i<=numberOfButtons; i++)
            buttons.push((
                <PaginationLink 
                    key={i}
                    page={i}
                    path={router.pathname}
                />
            ));
        return buttons;
    }, [numberOfButtons, router.pathname]);

    return (
        <Flex margin="10px">
            {Buttons}
            <PerPage />
        </Flex>
    );
}

export default Pagination;