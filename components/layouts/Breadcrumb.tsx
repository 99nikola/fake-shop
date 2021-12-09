import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Flex from "../atoms/Flex.styled";
import HeaderLink from "../atoms/HeaderLink";

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
        links.map((link) => (
            <Flex 
                key={link.breadcrumb}
                margin="0 5px"
                color="darkblue"
            >
                <Link href={link.href}>{link.breadcrumb}</Link>
            </Flex>
        ))
    ), [ links ]);

    return (
        <Flex width="100%">
            {BreadcrumbLinks}
        </Flex>
    )
}

export default Breadcrumb;