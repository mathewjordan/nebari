import React, { StrictMode } from "react";
import Items, { Grid, Slider } from "./index";
import { createRoot } from "react-dom/client";
import { items } from "./fixtures/collection/collection-long";

const Wrapper = () => {
  const handleCallback = (item) => {
    /**
     * do something with `item`
     */
    console.log(`item`, item);
  };

  return (
    <section>
      <div>
        <h2>Slider</h2>
        <Items as={Slider} itemCallback={handleCallback} items={items} />
      </div>
      <div>
        <h2>Grid</h2>
        <Items as={Grid} itemCallback={handleCallback} items={items} />
      </div>
    </section>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>
);
