import { render, screen, fireEvent } from "@testing-library/react";
import ProductListItem from "./ProductListItem";

it("shows on sale label when isOnSale", () => {
  render(<ProductListItem name="Mocha" price={3.5} imageUrl="..." isOnSale />);
  const onSaleElement = screen.getByText(/On Sale/i);
  expect(onSaleElement).toBeInTheDocument();
});

it("disables the button when disabled", () => {
  render(<ProductListItem name="Mocha" price={3.5} imageUrl="..." isSoldOut />);
  const soldOutElement = screen.getByText("Sold Out");
  expect(soldOutElement).toHaveProperty("disabled");
});

it("calls callback when button Add to Cart pressed", () => {
  const onAddCart = jest.fn();
  render(
    <ProductListItem
      name="Mocha"
      price={3.5}
      imageUrl="..."
      onAddCart={onAddCart}
    />
  );
  const addButton = screen.getByText("Add to Cart");
  fireEvent.click(addButton);
  expect(onAddCart).toHaveBeenCalled();
});
