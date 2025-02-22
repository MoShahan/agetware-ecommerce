import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ImageWithFallback from "../Common/ImageWithFallback";

import { FALLBACK_IMAGE } from "@/utils/constant";

describe("ImageWithFallback Component", () => {
  test("renders image with given props", () => {
    render(
      <ImageWithFallback
        alt="Test Image"
        width={100}
        height={100}
        imageUrl="/test-image.jpg"
      />
    );
    const imageElement = screen.getByRole("img", { name: /test image/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "/test-image.jpg");
  });

  test("uses fallback image on error", async () => {
    render(
      <ImageWithFallback
        alt="Fallback Test"
        width={100}
        height={100}
        imageUrl="/broken-image.jpg"
      />
    );
    const imageElement = screen.getByRole("img", { name: /fallback test/i });
    expect(imageElement).toHaveAttribute("src", "/broken-image.jpg");

    await userEvent.click(imageElement);
    imageElement.dispatchEvent(new Event("error"));

    expect(imageElement).toHaveAttribute("src", FALLBACK_IMAGE);
  });
});
