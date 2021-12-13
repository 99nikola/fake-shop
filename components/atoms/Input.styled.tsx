import { forwardRef, HTMLInputTypeAttribute, LegacyRef, RefAttributes } from "react";
import { RefCallBack } from "react-hook-form";
import styled, { StyledComponent, StyledProps } from "styled-components";

interface InputProps extends StyledInputProps {
    errorMessage?: string,
    placeholder?: string,
    name?: string,
    type?: HTMLInputTypeAttribute,
    value?: string,
    onChange?: (e: any) => void,
    ref?: RefCallBack,
    error?: boolean
}

const Input = forwardRef((props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
    const { width, errorMessage, type, error, ...rest } = props;
    return (
        <StyledInput width={width}>
            <input {...rest} ref={ref} type={type} aria-invalid={error}/>
            <p className="error-message">{errorMessage || ""}</p>
        </StyledInput>
    )
});

interface StyledInputProps {
    width?: string | number
}

export const StyledInput = styled.div<StyledInputProps>`
    margin: 5px;
    & > input {
        width: ${({ width }) => width || "auto"};
        height: 40px;
        mix-blend-mode: normal;
        border: 2px solid gray;
        box-sizing: border-box;
        border-radius: 6px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        padding: 0 10px;
    }
    & > input:focus {
        outline: 2px solid black;
        border: none;
    }
    & > input[aria-invalid="true"] {
        outline: 2px solid red;
        border: none;
    }
    & .error-message {
        color: red;
        margin: 2px 0 2px 20px;
    }
`;

export default Input;