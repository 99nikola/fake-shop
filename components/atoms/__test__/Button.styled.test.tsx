import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Button from "../Button.styled";
import "jest-styled-components";

afterEach(cleanup);

describe("Button.styled.tsx", () => {
    
    it("renders html button", () => {
        const { container } = render(<Button />);
        const button = container.firstChild as HTMLButtonElement;
        expect(button).toBeInTheDocument();
    });

    it("renders enabled button by default", () => {
        const { container } = render(<Button />);
        const button = container.firstChild as HTMLButtonElement;
        expect(button).toBeEnabled();
    });

    it("is not hidden", () => {
        const { container } = render(<Button />);
        const button = container.firstChild as HTMLButtonElement;
         expect(button.hidden).toBe(false);
    });

    it("has background-color: darkblue", () => {
        const { container } = render(<Button />);
        const button = container.firstChild as HTMLButtonElement;
        expect(button).toHaveStyleRule("background-color", "darkblue");
    });

    it("has maring 0 by default", () => {
        const { container } = render(<Button />);
        const button = container.firstChild as HTMLButtonElement;
        expect(button).toHaveStyleRule("margin", "0");
    });

    it("takes arument {margin}", () => {
        const { container } = render(<Button margin="0 10px"/>);
        const button = container.firstChild as HTMLButtonElement;
        expect(button).toHaveStyleRule("margin", "0 10px");
    });

    it("has color: white", () => {
        const { container } = render(<Button />);
        const button = container.firstChild as HTMLButtonElement;
        expect(button).toHaveStyleRule("color", "white");
    });

    // it("has border when active", async () => {
    //     const { container } = render(<Button data-testid="activeButton" />);
    //     const button = container.firstChild as HTMLButtonElement;
        
    //     fireEvent.mouseDown(button);
    //     const activeButton = await screen.findByTestId("activeButton");
    //     expect(activeButton).toHaveStyle("border: 1px solid gray");
    // });
});

export {};