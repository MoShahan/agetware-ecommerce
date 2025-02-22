import { render, screen, fireEvent } from "@testing-library/react";

import { ProductsCard, WishlistButton } from "../Common/Products";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  imageUrl: "/test-image.jpg",
  brand: "Test Brand",
  isPopular: true,
};

const mockHandleWishlist = jest.fn();

describe("ProductsCard Component", () => {
  test("renders product card with correct details", () => {
    render(
      <ProductsCard
        product={mockProduct}
        handleWishlist={mockHandleWishlist}
        isWishlisted={false}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Test Brand/i })).toHaveAttribute(
      "src",
      "/test-image.jpg"
    );
  });

  test("renders popular tag when product is popular", () => {
    render(
      <ProductsCard
        product={mockProduct}
        handleWishlist={mockHandleWishlist}
        isWishlisted={false}
      />
    );
    expect(
      screen.getByTestId("LocalFireDepartmentRoundedIcon")
    ).toBeInTheDocument();
  });

  test("handles wishlist button click", () => {
    render(
      <ProductsCard
        product={mockProduct}
        handleWishlist={mockHandleWishlist}
        isWishlisted={false}
      />
    );

    const wishlistButton = screen.getByRole("button");
    fireEvent.click(wishlistButton);
    expect(mockHandleWishlist).toHaveBeenCalledWith(1);
  });
});

describe("WishlistButton Component", () => {
  test("renders wishlist button with correct initial state", () => {
    render(
      <WishlistButton
        id={1}
        toggleWishlist={mockHandleWishlist}
        isWishlisted={false}
      />
    );
    const wishlistIcon = screen.getByTestId("FavoriteIcon");
    expect(wishlistIcon).toHaveStyle("color: #fff");
  });

  test("calls toggleWishlist on click", () => {
    render(
      <WishlistButton
        id={1}
        toggleWishlist={mockHandleWishlist}
        isWishlisted={false}
      />
    );

    const wishlistButton = screen.getByRole("button");
    fireEvent.click(wishlistButton);
    expect(mockHandleWishlist).toHaveBeenCalledWith(expect.any(Object), 1);
  });
});
