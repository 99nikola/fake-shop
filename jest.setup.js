import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";


jest.mock("next/router", () => ({
    useRouter: () => ({
        asPath: new String()
    })
}));

