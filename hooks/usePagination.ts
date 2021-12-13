import { useMemo } from "react";
import { useSelector } from "react-redux";

interface PaginateProps {
    items: any[]
    page?: number,
}

const usePagination = (props: PaginateProps) => {

    const pagination = useSelector((state: any) => state.pagination);

    const ItemsToRender = useMemo(() => {
        const itemsToRender = [];
        const top = pagination.page * pagination.perPage;
        const cap = props.items.length < top 
            ? props.items.length
            : top;
            
        for (let i=(pagination.page-1) * pagination.perPage; i<cap; i++) 
            itemsToRender.push(props.items[i]);
        return itemsToRender; 
    }, [pagination.page, pagination.perPage, props.items]);

    return ItemsToRender;
}

export default usePagination;