import { render } from "@testing-library/react";
import Pagination from "../Pagination";

describe("Pagination", () => {
    describe("takes 'currPage: number', 'total: number', 'perPage: number' as arguments", () => {
        const html = render(<Pagination perPage={10} total={20} currPage={1} />);

        it("renders ceil({total} / {perPage}) buttons", () => {
            expect(html.queryByText(1)).toBeInTheDocument();
            expect(html.queryByText(2)).toBeInTheDocument();
            // expect(html.queryByText(3)).not.toBeInTheDocument();
        });
    });
});

export {};