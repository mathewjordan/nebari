import React, { StrictMode } from "react";
import { Grid, Slider } from "./index";
import { createRoot } from "react-dom/client";
import { items } from "./fixtures/collection/collection-long";

const Wrapper = () => {
  const handleCallback = (id) => {
    console.log(`id`, id);
  };

  return (
    <section>
      <div>
        <h2>Slider</h2>
        <Slider itemCallback={handleCallback} items={items} />
      </div>
      <div>
        <h2>Grid</h2>
        <Grid itemCallback={handleCallback} items={items} />
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
