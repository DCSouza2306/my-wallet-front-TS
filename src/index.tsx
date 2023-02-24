import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { RefreshProvider } from "./providers/refresh";

const root = ReactDOM.createRoot(
 document.getElementById("root") as HTMLElement
);
root.render(
 <React.StrictMode>
  <RefreshProvider>
   <App />
  </RefreshProvider>
 </React.StrictMode>
);
