import { useRouter } from "next/router";
import { useCallback } from "react";

interface PaginationLinkProps {
    page: number,
    path: string
}
const PaginationLink: React.FC<PaginationLinkProps> = (props) => {

    const router = useRouter();
    const onSelect = useCallback(() => {
        router.replace(props.path + "?page=" + props.page);
    }, [router.replace]);

    return (
        <button onClick={onSelect}>{props.page}</button>
    );
}

export default PaginationLink;