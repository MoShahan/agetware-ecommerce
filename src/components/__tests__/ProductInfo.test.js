import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { useParams } from "next/navigation";

import ProductInfo from "../ProductInfo/ProductInfo";

import { toastMessage } from "@/utils/toast";

jest.mock("next/navigation", () => ({ useParams: jest.fn() }));

describe("ProductInfo Component", () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: "1" });
    localStorage.clear();
  });

  test("renders loading state initially", () => {
    render(<ProductInfo setRoutes={jest.fn()} />);
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  test("renders product details after fetching data", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        product: {
          id: "1",
          title: "Test Product",
          category: "Electronics",
          description: "A great product",
          price: 100,
          brand: "BrandX",
          model: "ModelX",
          image: "test-image.jpg",
          popular: true,
        },
      },
    });

    render(<ProductInfo setRoutes={jest.fn()} />);
    expect(await screen.findByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });

  test("handles adding product to cart", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        product: {
          id: "1",
          title: "Test Product",
          price: 100,
        },
      },
    });

    render(<ProductInfo setRoutes={jest.fn()} />);

    const addButton = await screen.findByText("Add to Cart");
    fireEvent.click(addButton);

    expect(toastMessage).toHaveBeenCalledWith("success", "Added to Cart");
  });
});
