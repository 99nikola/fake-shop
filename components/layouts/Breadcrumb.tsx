import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const map = new Map([
   ["", "Home"],
   ["categories", "Categories"]
]);

const Breadcrumb: React.FC = () => {

    const router = useRouter();

    const Links = useMemo(() => {
        const arrPath = router.asPath.split("/");
        arrPath.shift();

        return arrPath.map((path, index) => {
            if (path.indexOf("?") === -1) 
                return ({
                    breadcrumb: map.has(path) 
                        ? map.get(path) 
                        : decodeURIComponent(path),
                    href: "/" + arrPath.slice(0, index + 1).join("/")
                });
                
            const [, paramName ] = path.split("?");
            return ({
                breadcrumb: decodeURIComponent(paramName),
                href: router.asPath
            });
        });
    }, [router.asPath]); 

    return (
        <div>
            <Link href="/">Home</Link>
            {Links.map((link) => (
                <div key={link.breadcrumb}>
                    <Link href={link.href}>{link.breadcrumb}</Link>
                </div>
            ))}
        </div>
    )
}

export default Breadcrumb;