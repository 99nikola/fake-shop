import styled from "styled-components";

interface ButtonProps {
    margin?: string
}

const Button = styled.button<ButtonProps>`
    width: auto;
    height: 40px;
    padding: 0 20px;
    background-color: darkblue;
    border-radius: 6px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: white;
    border: none;
    &:active {
        border: 1px solid gray;
    }
    margin: ${({ margin }) => margin || "0"};
`;

export default Button;