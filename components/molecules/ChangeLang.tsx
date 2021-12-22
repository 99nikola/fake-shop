import { useRouter } from "next/router";
import { useCallback } from "react";

interface ChangeLangProps {
    locale: string
}

const ChangeLang: React.FC<ChangeLangProps> = (props) => {

    const router = useRouter();

    const handleLangChange = useCallback(() => {
        router.replace({}, {}, {
            locale: props.locale
        });
    }, [router.replace, props.locale]);

    return (
        <button onClick={handleLangChange}>
            {props.children}
        </button>
    )
}

export default ChangeLang;