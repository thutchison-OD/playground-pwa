import {App} from "./App";
import {routes} from "./routes";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router-dom";

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
      navigator.serviceWorker
          .register("../serviceWorker.js")
          .then(res => console.log("service worker registered"))
          .catch(err => console.log("service worker not registered", err))
      })
  }
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const router = createBrowserRouter(routes);

registerServiceWorker();

root.render(
  <StrictMode>
    <App router={router} />
  </StrictMode>,
);
