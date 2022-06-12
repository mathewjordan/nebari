import React, { StrictMode } from "react";
import Nebari from "./index";
import { createRoot } from "react-dom/client";
import { items } from "./fixtures/manifest/manifest-long";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Nebari items={items} />
  </StrictMode>
);
