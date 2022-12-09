import React from "react";
import "./ProductListItem.css";
import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Heading from "../../atoms/Heading";

function Text({ children }) {
  return <span>{children}</span>;
}

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddCart,
  isSoldOut,
  isOnSale,
}) {
  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && "(On Sale)"}
      </Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold Out" : "Add to Cart"}
      </Button>
    </Card>
  );
}
