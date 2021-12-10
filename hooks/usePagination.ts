import { useMemo } from "react";

interface PaginateProps {
    page: number,
    perPage: number,
    items: any[]
}

const usePagination = (props: PaginateProps) => {
    const ItemsToRender = useMemo(() => {
        const itemsToRender = [];
        const top = props.page * props.perPage;
        const cap = props.items.length < top 
            ? props.items.length
            : top;
            
        for (let i=(props.page-1) * props.perPage; i<cap; i++) 
            itemsToRender.push(props.items[i]);
        return itemsToRender; 
    }, [props.page, props.perPage, props.items]);

    return ItemsToRender;
}

export default usePagination;