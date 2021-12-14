import { useRouter } from "next/router";
import { useCallback } from "react";
import { setPage } from "../../utils/routerQuery";

interface PaginationLinkProps {
    page: number,
    path: string
}
const PaginationLink: React.FC<PaginationLinkProps> = (props) => {

    const router = useRouter();

    const onSelect = useCallback(() => {
        setPage(router, props.page.toString());
    }, [router, props.page]);
    return (
        <button onClick={onSelect}>{props.page}</button>
    );
}

export default PaginationLink;