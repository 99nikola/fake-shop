import Navbar from "../Navbar";
import { render } from "@testing-library/react";

describe("Navbar", () => {
    const html = render(<Navbar></Navbar>);
    
    it("has Home link",  () => {
        expect(html.queryAllByText("Home")[0]).toBeInTheDocument();
    });
});

export {};