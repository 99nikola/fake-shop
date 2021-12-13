import { useRouter } from "next/router";
import { useCallback } from "react";
import { useMemo } from "react";
import { ChangeEventHandler, useState } from "react";
import { getPerPage, setPerPage } from "../../utils/routerQuery";
import Flex from "../atoms/Flex.styled";
import PerPageForm from "../molecules/PerPageForm";

const defaultSelects = new Set(
    [3, 5, 10]
);

const PerPage: React.FC = () => {

    const [ showInput, setShowInput ] = useState<boolean>(false);
    const [ customValue, setCustomValue ] = useState<number>(0);

    const perPage = getPerPage();
    const router = useRouter();

    const changePerPage: ChangeEventHandler<HTMLSelectElement> = useCallback((selectElem) => {
        const value = selectElem.target.value;
        if (value === "custom") {
            setShowInput(true);
            return;
        }
        setPerPage(router, value);
    }, [router]);

    const name = useMemo(() => {
        if (defaultSelects.has(perPage))
            return perPage;
        return "custom";
    }, [perPage]);

    const PerPageInput = useMemo(() => (
        showInput 
        ?
            <PerPageForm 
                setCustomValue={setCustomValue}
                setCustomInput={setShowInput}
            />
        :
            <select onChange={changePerPage} defaultValue={name}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value="custom">Custom</option>
            </select>
    ), [ showInput, customValue, name ]);

    return (
        <Flex alignItems="center">
            {PerPageInput}
        </Flex>
    )
}

export default PerPage;