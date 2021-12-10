import { render } from "@testing-library/react";
import Breadcrumb from "../Breadcrumb";

describe("Breadcrumb", () => {
    const html = render(<Breadcrumb />);

    it("has Home link", () => {
        expect(html.queryByText("Home")).toBeInTheDocument();
    });
});

export {};