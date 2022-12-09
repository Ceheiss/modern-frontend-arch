import ProductList from "./ProductList";

export default {};

export const basic = () => <ProductList />;

export const loading = () => <ProductList status="loading" />;

export const error = () => <ProductList status="errored" />;
