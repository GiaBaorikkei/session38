import React, { useMemo } from "react";

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}

interface Props {
  products: Product;
  updateProduct: () => void;
}
export default function ProductItem({products, updateProduct}: Props) {

  return (
    <ul>
      <li></li>
    </ul>
  );
}
