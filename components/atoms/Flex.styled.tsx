import styled from "styled-components";

interface FlexProps {
    direction?: "column" | "row",
    alignItems?: "flex-start" | "center" | "flex-end | stretch",
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly",
    padding?: string,
    margin?: string,
    border?: string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    color?: string
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    align-items: ${({ alignItems }) => alignItems || "flex-start"};
    justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
    padding: ${({ padding }) => padding || "0"};
    margin: ${({ margin }) => margin || "0"};
    border: ${({ border }) => border || "none"};
    background-color: ${({ backgroundColor }) => backgroundColor || "white"};
    width: ${({ width }) => width || "max-content"};
    height: ${({ height }) => height || "max-content"};
    border-radius: 6px;
    color: ${({ color }) => color || "unset"};
`;

export default Flex;