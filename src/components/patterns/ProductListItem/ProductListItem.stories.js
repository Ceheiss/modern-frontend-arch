import React from "react";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import ProductListItem from "./ProductListItem";

// Prefer duplication over wrong abstraction - Sandi Metz

export default { title: "ProductListItem", decorators: [withKnobs] };

export const standard = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddCart={action("Add to cart clicked")}
    imageUrl={text(
      "imageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )}
  />
);

export const soldOut = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddCart={action("Add to cart clicked")}
    imageUrl={text(
      "imageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )}
    isSoldOut
  />
);

export const onSale = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddCart={action("Add to cart clicked")}
    imageUrl={text(
      "imageUrl",
      "https://source.unsplash.com/tNALoIZhqVM/200x100/"
    )}
    isOnSale
  />
);
