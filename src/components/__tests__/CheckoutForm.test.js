import { fireEvent, render, screen } from "@testing-library/react";

import CheckoutFormComponent from "../Cart/CheckoutForm";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe("CheckoutFormComponent", () => {
  test("renders component", () => {
    render(<CheckoutFormComponent />);
  });

  let handleClearCart;
  let handleClose;

  beforeEach(() => {
    handleClearCart = jest.fn();
    handleClose = jest.fn();
  });

  test("change input for all fields and then submit", async () => {
    render(
      <CheckoutFormComponent
        handleClearCart={handleClearCart}
        handleClose={handleClose}
      />
    );

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByLabelText(/pin code/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "NY" },
    });
    fireEvent.change(screen.getByLabelText(/country/i), {
      target: { value: "USA" },
    });
    fireEvent.change(screen.getByLabelText(/mobile number/i), {
      target: { value: "9876543210" },
    });

    expect(screen.getByLabelText(/full name/i).value).toBe("John Doe");
    expect(screen.getByLabelText(/address/i).value).toBe("123 Main St");
    expect(screen.getByLabelText(/pin code/i).value).toBe("12345");
    expect(screen.getByLabelText(/city/i).value).toBe("New York");
    expect(screen.getByLabelText(/state/i).value).toBe("NY");
    expect(screen.getByLabelText(/country/i).value).toBe("USA");
    expect(screen.getByLabelText(/mobile number/i).value).toBe("9876543210");

    const submitBtn = screen.getByTestId("submit-btn");
    fireEvent.submit(submitBtn);
  });

  test("inputing non-numeric values", () => {
    render(
      <CheckoutFormComponent
        handleClearCart={handleClearCart}
        handleClose={handleClose}
      />
    );

    fireEvent.change(screen.getByLabelText(/pin code/i), {
      target: { value: "abc" },
    });

    fireEvent.change(screen.getByLabelText(/mobile number/i), {
      target: { value: "xyz" },
    });

    expect(screen.getByLabelText(/pin code/i).value).toBe("");
    expect(screen.getByLabelText(/mobile number/i).value).toBe("");
  });
});
