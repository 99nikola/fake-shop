import { NextRouter, useRouter } from "next/router";
import { useMemo } from "react";

export const getPage = () => {
    const router = useRouter();
    const page = useMemo(() => Number.parseInt(router.query?.page as string) || 1, [router.query]);
    return page;
}

export const setPage = (router: NextRouter, page: string) => {
    const query = {
        ...router.query,
        page
    };

    console.log(query);
    
    router.replace({
        pathname: router.pathname,
        query
    });
}

export const getPerPage = () => {
    const router = useRouter();
    const perPage = useMemo(() => Number.parseInt(router.query?.perPage as string) || 5, [router.query]);
    return perPage;
}

export const setPerPage = (router: NextRouter, perPage: string) => {
    const query = {
        ...router.query,
        perPage
    };

    router.replace({
        pathname: router.pathname,
        query
    });
}