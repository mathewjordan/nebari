import React, { StrictMode, useEffect, useState } from "react";
import Nebari from "./index";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Nebari />
  </StrictMode>
);
