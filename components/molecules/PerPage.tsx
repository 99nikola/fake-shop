import { useCallback } from "react";
import { useMemo } from "react";
import { ChangeEventHandler, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { perPageRule, requiredRule } from "../../rules";
import Flex from "../atoms/Flex.styled";
import Input from "../atoms/Input.styled";
import { useDispatch, useSelector } from "react-redux"; 
import { setPerPage } from "../../store/pagination/PaginationActions";


const PerPage: React.FC = () => {

    const [ customInput, setCustomInput ] = useState(false);
    const [ customValue, setCustomValue ] = useState<number>();
    const pagination = useSelector((state: any) => state.pagination);
    const dispatch = useDispatch();

    const changePerPage: ChangeEventHandler<HTMLSelectElement> = useCallback((selectElem) => {
        const value = selectElem.target.value;
        if (value === "custom") {
            setCustomInput(true);
            return;
        }
        dispatch(setPerPage(Number.parseInt(value)));
    }, []);

    const form = useForm();

    const onValid = (data: any) => {
        const value = Number.parseInt(data.perPage);
        setCustomValue(value);
        setCustomInput(false);
        dispatch(setPerPage(value));
    }

    const PerPageInput = useMemo(() => (
        customInput 
        ?
            <form onSubmit={form.handleSubmit(onValid)}>
                <Controller
                    name="perPage"
                    control={form.control}
                    defaultValue=""
                    rules={perPageRule} 
                    render={({ field, fieldState }) => (
                        <Input 
                            {...field}
                            type="number" 
                            width="70px"
                            error={Boolean(fieldState.error)}
                            errorMessage={fieldState.error?.message}    
                        />
                    )}
                />
            </form>
        :
            <select onChange={changePerPage} defaultValue={pagination.perPage}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value="custom">Custom</option>
                {customValue && <option value={customValue}>{customValue}</option>}
            </select>
    ), [customInput, customValue, pagination.perPage]);

    return (
        <Flex alignItems="center">
            {PerPageInput}
        </Flex>
    )
}

export default PerPage;