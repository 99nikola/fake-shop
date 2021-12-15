import Link from "../atoms/Link";
import { useMemo } from "react";
import { BreadcrumbItem } from "../../typescript/interfaces/Breadcrumb";
import Flex from "../atoms/Flex.styled";
import { useCallback } from "react";

interface BreadcrumbProps {
    items: BreadcrumbItem[]   
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {

    const backgroundColor = useCallback((i: number) => (
        i === (props.items.length-1)
            ? "lightgray"
            : "whitesmoke"
    ), [props.items]);

    const BreadcrumbLinks = useMemo(() => ( 
        props.items.map((item, i) => (
            <Link key={item.breadcrumb} href={item.href} backgroundColor={backgroundColor(i)}>
                {item.breadcrumb}
            </Link>
        ))
    ), [props.items]);

    return (
        <Flex 
            width="100%"
            margin="20px 0"
        >
            {BreadcrumbLinks}
        </Flex>
    );
}

export default Breadcrumb;