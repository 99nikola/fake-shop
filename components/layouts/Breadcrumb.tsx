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
        const queryIndex = router.asPath.indexOf("?");
        let path = router.asPath;

        if (queryIndex !== -1) 
            path = path.slice(0, queryIndex);

        const arrPath = path.split("/");
        arrPath.shift();

        return arrPath.map((path, index) => ({
            breadcrumb: map.has(path) ? map.get(path) : path,
            href: "/" + arrPath.slice(0, index + 1).join("/")
        }));
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