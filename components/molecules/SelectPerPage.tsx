import { useRouter } from "next/router";
import React, { ChangeEventHandler, ReactNode, useCallback, useMemo } from "react";
import { getPerPage, setPerPage } from "../../utils/routerQuery";

const defaultSelects = new Set(
    [3, 5, 10]
);
    
interface SelectPerPageProps {
    setShowInput: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectPerPage: React.FC<SelectPerPageProps> = (props) => {

    const router =  useRouter();
    const perPage = getPerPage();

    const changePerPage: ChangeEventHandler<HTMLSelectElement> = useCallback((selectElem) => {
        const value = selectElem.target.value;
        if (value === "custom") {
            props.setShowInput(true);
            return;
        }
        setPerPage(router, value);
    }, [router]);

    const selectValue = useMemo(() => {
        if (defaultSelects.has(perPage))
            return perPage;
        return "custom";
    }, [perPage]);

    return (
        <select onChange={changePerPage} defaultValue={selectValue}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value="custom">Custom</option>
        </select>
    );
}

export default SelectPerPage;