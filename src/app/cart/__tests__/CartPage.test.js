import { ThemeProvider, createTheme } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";

import CartPage from "../CartPage";

describe("CartPage", () => {
  const theme = createTheme();

  it("should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartPage />
      </ThemeProvider>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Cart")).toBeInTheDocument();
  });
});
