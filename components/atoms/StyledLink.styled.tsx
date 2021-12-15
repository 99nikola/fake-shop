import styled from "styled-components";

export interface StyledLinkProps {
    backgroundColor?: string,
    color?: string
}

const StyledLink = styled.a<StyledLinkProps>`
    border: 1px solid gray;
    padding 5px 10px;
    border-radius: 6px;
    color: ${({ color }) => color || "black"};
    cursor: pointer;
    background-color: ${({ backgroundColor }) => backgroundColor || "gray"};

    &:hover {
        background-color: darkgray;
        cursor: pointer;
        color: black;
    }

    &:active {
        background-color: lightgray;
    }
`;

export default StyledLink;