import { useMemo } from "react";
import { getPage, getPerPage } from "../utils/routerQuery";

interface PaginateProps {
    items: any[],
    perPage?: number,
    page?: number
}

const usePagination = (props: PaginateProps) => {

    const perPage = props.perPage || getPerPage();
    const page = props.page || getPage();

    const ItemsToRender = useMemo(() => {
        const itemsToRender = [];
        const top = page * perPage;
        const cap = props.items.length < top 
            ? props.items.length
            : top;
            
        for (let i=(page-1) * perPage; i<cap; i++) 
            itemsToRender.push(props.items[i]);
        return itemsToRender; 
    }, [page, perPage, props.items]);

    return ItemsToRender;
}

export default usePagination;