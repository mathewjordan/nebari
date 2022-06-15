import React, { StrictMode } from "react";
import { Grid, Slider } from "./index";
import { createRoot } from "react-dom/client";
import { items } from "./fixtures/collection/collection-long";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <section>
      <h2>Slider</h2>
      <Slider items={items} />
    </section>
    <section>
      <h2>Grid</h2>
      <Grid items={items} />
    </section>
  </StrictMode>
);
