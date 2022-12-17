import ProductListItem from "../ProductListItem";

// The machine can have different states, but at a given time fulfills only one of them
export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

function Loading() {
  return <h3>Loading...</h3>;
}

function Error({ message }) {
  return <h3>{message}</h3>;
}

export default function ProductList({ status, ...otherProps }) {
  if (status === statusTypes.loading) {
    return <Loading />;
  }
  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }
  return otherProps.data.map((e) => (
    <ProductListItem name={e.name} price={e.price} imageUrl={e.imageUrl} />
  ));
}
