import React, { useEffect, useState } from "react";
import { statusTypes } from "../../components/patterns/ProductList/ProductList";

export default function Cart() {
  const [usersState, setUsersState] = useState({
    data: [],
    status: statusTypes.loading,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const productFetch = await fetch("/api/profile");
        const productResponse = await productFetch.json();
        setUsersState({
          data: productResponse,
          status: statusTypes.loaded,
        });
      } catch (ex) {
        console.error(ex);
        setUsersState({ data: [], status: statusTypes.errored });
      }
    };
    getData();
  }, []);

  const users =
    usersState.status === statusTypes.loaded ? (
      <h5>Name: {usersState.data.name}</h5>
    ) : (
      "Loading..."
    );

  return (
    <div>
      <h3>Users:</h3>
      {users}
    </div>
  );
}
