import { render, screen, fireEvent } from "@testing-library/react";

import QuantityComponent from "../Cart/Quantity";

describe("QuantityComponent", () => {
  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();

  it("simulate clicking plus icon", () => {
    render(
      <QuantityComponent
        quantity={1}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
    );
    fireEvent.click(screen.getByText("+"));
  });

  it("simulate clicking minus icon", () => {
    render(
      <QuantityComponent
        quantity={2}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
    );
    fireEvent.click(screen.getByText("-"));
  });
});
