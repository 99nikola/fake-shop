import Link from "next/link";
import { memo, useMemo } from "react";
import { BreadcrumbItem } from "../../typescript/interfaces/Breadcrumb";
import Flex from "../atoms/Flex.styled";
import StyledLink from "../atoms/StyledLink.styled";


interface BreadcrumbProps {
    items: BreadcrumbItem[]   
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {

    const BreadcrumbLinks = useMemo(() => (
        props.items.map((item, i) => (
            <Link key={item.breadcrumb} href={item.href} passHref={true}>
                <StyledLink last={i === (props.items.length-1)}>{item.breadcrumb}</StyledLink>
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

export default memo(Breadcrumb);