import { ThemeProvider, createTheme } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";

import WishlistPage from "@/pages/WishlistPage"; // Adjust import if necessary

describe("WishlistPage", () => {
  const theme = createTheme();

  it("should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <WishlistPage />
      </ThemeProvider>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Wishlist")).toBeInTheDocument();
  });
});
