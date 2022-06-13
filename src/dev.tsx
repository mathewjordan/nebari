import React, { StrictMode } from "react";
import { Grid, ScrollableList } from "./index";
import { createRoot } from "react-dom/client";
import { items } from "./fixtures/collection/collection-long";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    {/* <section>
      <h2>ScrollableList</h2>
      <ScrollableList items={items} />
    </section> */}
    <section>
      <h2>Grid</h2>
      <Grid items={items} />
    </section>
  </StrictMode>
);
