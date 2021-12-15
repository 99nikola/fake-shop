import Navbar from "../Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {

    it("has 2 child node", () => {
        const { container } = render(<Navbar></Navbar>);
        const navbar = container.firstChild as HTMLDivElement;
        
        expect(navbar.childElementCount).toBe(2);
    });

    it("can render children", () => {
        render(
            <Navbar>
                <h2>H2</h2>
                <div>
                    <h3>H3</h3>
                </div>
            </Navbar>);

        expect(screen.getByText("H2")).toBeInTheDocument();
        expect(screen.getByText("H3")).toBeInTheDocument();
    });

    it("has Home link", () => {
        render(<Navbar></Navbar>);
        expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("has Users link", () => {
        render(<Navbar></Navbar>);
        expect(screen.getByText("Users")).toBeInTheDocument();
    });

    it("has Products link", () => {
        render(<Navbar></Navbar>);
        expect(screen.getByText("Products")).toBeInTheDocument();
    });

    it("has Categories link", () => {
        render(<Navbar></Navbar>);
        expect(screen.getByText("Categories")).toBeInTheDocument();
    });
    
    it("has Carts link", () => {
        render(<Navbar></Navbar>);
        expect(screen.getByText("Carts")).toBeInTheDocument();
    });
    
    it("has Login link", () => {
        render(<Navbar></Navbar>);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });
    
});

export {};