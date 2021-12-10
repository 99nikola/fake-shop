import { useRouter } from "next/router";
import { useMemo } from "react";

const getPage = () => {
    const router = useRouter();
    const page = useMemo(() => Number.parseInt(router.query?.page as string) || 1, [router.query]);
    return page;
}

export default getPage;