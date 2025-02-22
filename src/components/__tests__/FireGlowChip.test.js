import { render, screen } from "@testing-library/react";

import { FireGlowChip } from "../Common/CustomChip";

test("renders correctly with label", () => {
  render(<FireGlowChip label="Test Chip" />);
  const chipElement = screen.getByText(/Test Chip/i);
  expect(chipElement).toBeInTheDocument();
});
