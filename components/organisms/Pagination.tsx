import { useRouter } from "next/router";
import { useMemo } from "react";
import { getPerPage } from "../../utils/routerQuery";
import Flex from "../atoms/Flex.styled";
import PaginationLink from "../molecules/PaginationLink";
import PerPage from "./PerPage";

interface PaginationProps {
    total: number,
}

const Pagination: React.FC<PaginationProps> = (props) => {

    const perPage = getPerPage();
    const numberOfButtons = useMemo(() => Math.ceil(props.total / perPage), [props.total, perPage]);
    const router = useRouter();

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
    )
}

export default Pagination;