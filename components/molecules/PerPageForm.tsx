import { useRouter } from "next/router";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { perPageRule } from "../../rules";
import { setPerPage } from "../../utils/routerQuery";
import Input from "../atoms/Input.styled";

interface PerPageFormProps {
    setCustomInput: React.Dispatch<React.SetStateAction<boolean>>
}
const PerPageForm: React.FC<PerPageFormProps> = (props) => {

    const form = useForm();
    const router = useRouter();

    const onValid = useCallback((data: any) => {
        setPerPage(router, data.perPage);
        props.setCustomInput(false);
    }, [router]);

    return (
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
    );
}

export default PerPageForm;