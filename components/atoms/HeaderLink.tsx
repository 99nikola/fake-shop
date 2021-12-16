import styled from "styled-components";

const HeaderLink = styled.a`
    border: 1px solid gray;
    padding 5px 10px;
    border-radius: 6px;
    color: white;
    background-color: gray;

    &:hover {
        background-color: darkgray;
        cursor: pointer;
        color: black;
    }

    &:active {
        background-color: lightgray;
    }
`;

export default HeaderLink;