import { render, screen } from "@testing-library/react";

import InfoLoader from "../ProductInfo/InfoLoader";

describe("InfoLoader Component", () => {
  test("renders skeleton loaders", () => {
    render(<InfoLoader />);

    expect(screen.getAllByRole("presentation").length).toBeGreaterThan(0);
  });

  test("renders main rectangular skeleton", () => {
    render(<InfoLoader />);
    const mainSkeleton = screen.getAllByRole("presentation")[0];
    expect(mainSkeleton).toBeInTheDocument();
  });

  test("renders multiple text skeletons", () => {
    render(<InfoLoader />);
    const textSkeletons = screen.getAllByRole("presentation");
    expect(textSkeletons.length).toBeGreaterThan(5);
  });
});
