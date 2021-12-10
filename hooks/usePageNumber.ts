import { useRouter } from "next/router";
import { useEffect, useState } from "react"


export const usePage = (defaultPage = 1) => {
    const [ page, setPage ] = useState(defaultPage);
    const router = useRouter();

    useEffect(() => {
        const pageQuery = router.query?.page;
        if (pageQuery === undefined)
            return;
        
        setPage(Number.parseInt(pageQuery as string));
    }, [router.query]);

    return page;
}