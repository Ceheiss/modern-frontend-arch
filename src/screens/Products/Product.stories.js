import React from "react";
import { Server } from "miragejs";
import Products from "./Products";

let server = new Server();
server.get("/api/products/", {
  data: [
    {
      id: 1,
      name: "Mocha",
      price: 3.5,
      imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
    },
  ],
});

export default { title: "screens/products" };

export const standard = () => <Products />;
