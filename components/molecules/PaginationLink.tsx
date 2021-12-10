import { useRouter } from "next/router";
import { useCallback } from "react";

interface PaginationLinkProps {
    page: number
}
const PaginationLink: React.FC<PaginationLinkProps> = (props) => {

    const router = useRouter();
    const onSelect = useCallback(() => {
        router.replace(router.pathname + "?page=" + props.page);
    }, [router.replace, router.pathname]);

    return (
        <button onClick={onSelect}>{props.page}</button>
    );
}

export default PaginationLink;