import { ThemeProvider, createTheme } from "@mui/material/styles";
import { render } from "@testing-library/react";

import Cart from "@/components/Cart/Cart";

jest.mock("@/utils/toast", () => ({
  toastMessage: jest.fn(),
}));

describe("Cart Component", () => {
  const theme = createTheme();

  it("should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Cart />
      </ThemeProvider>
    );
  });
});
