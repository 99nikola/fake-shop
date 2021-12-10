import styled from "styled-components";

interface StyledLinkProps {
    last?: boolean
}

const StyledLink = styled.div<StyledLinkProps>`
    margin: 0 10px;
    padding: 5px 10px;
    border: 1px solid gray;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${({ last }) => last ? "lightgray" : "whitesmoke"};
`;

export default StyledLink;