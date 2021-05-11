import React from "react";
import zelda from "../data/zelda";

import ProductCard from "./components/product-card";
import "./styles/app.css";

import CardHeader from "../src/components/product-card/header";
import CardBody from "../src/components/product-card/body";
import CardFooter from "../src/components/product-card/footer";

export const App = () => {
  return (
    <div id="app" className="container default-flex">
      <ProductCard product={zelda} />
      <CardHeader product={zelda} />
      <CardFooter product={zelda} />
      <CardBody product={zelda} />
    </div>
  );
};
