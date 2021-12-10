import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Flex from "../atoms/Flex.styled";
import StyledLink from "../atoms/StyledLink.styled";

const map = new Map([
    ["/", "Home"],
    ["categories", "Categories"],
    ["products", "Products"],
    ["users", "Users"],
    ["carts", "Carts"],
    ["login", "Login"]
]);

const Breadcrumb: React.FC = () => {

    const router = useRouter();

    const links = useMemo(() => {
        if (router.asPath === "/")
            return [{
                breadcrumb: "Home",
                href: "/"
            }];
        const arrPath = router.asPath.split("/");
        arrPath.shift();
        arrPath.unshift("/");

        return arrPath.map((path, index) => {
            if (path.indexOf("?") === -1) 
                return ({
                    breadcrumb: map.has(path) 
                        ? map.get(path) 
                        : decodeURIComponent(path),
                    href: "/" + arrPath.slice(1, index + 1).join("/")
                });
                
            const [, paramName ] = path.split("?");
            return ({
                breadcrumb: decodeURIComponent(paramName),
                href: router.asPath
            });
        });
    }, [router.asPath]); 

    const BreadcrumbLinks = useMemo(() => (
        links.map((link, i) => (
            <Link key={link.breadcrumb} href={link.href}>
                <StyledLink last={i === (links.length-1)}>{link.breadcrumb}</StyledLink>
            </Link>
        ))
    ), [links]);

    return (
        <Flex 
            width="100%"
            margin="20px 0"
        >
            {BreadcrumbLinks}
        </Flex>
    )
}

export default Breadcrumb;