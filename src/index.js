import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
      root.render(<App />);
