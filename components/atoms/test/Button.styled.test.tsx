import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "../Button.styled";
import "jest-styled-components";

describe("Button.styled.tsx", () => {
    render(<Button />);
    const button = screen.getByRole("button");


    it("renders html button", () => {
        expect(button).toBeInTheDocument();
    });

    it("renders enabled button by default", () => {
        expect(button).toBeEnabled();
    });

    it("has attribute class", () => {
        expect(button.hasAttribute("class")).toBe(true);
    });

    it("is not hidden", () => {
        expect(button.hidden).toBe(false);
    });

    it("has background-color: darkblue", () => {
        const tree = renderer.create(<Button />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("background-color", "darkblue");
    });

    it("has maring 0 by default", () => {
        const tree = renderer.create(<Button />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("margin", "0");
    });

    it("takes arument {margin}", () => {
        const tree = renderer.create(<Button margin="0 10px"/>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("margin", "0 10px");
    });
});

export {};