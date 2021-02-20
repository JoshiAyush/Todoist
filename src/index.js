import "normalize.css";

import React from "react";
import { render } from "react-dom";

import App from "./App.js";
import { GlobalStyles } from "./global-styles.js";

import { ProjectStateProvider } from "./context/index.js";
import { SelectedProjectStateProvider } from "./context/index.js";

render(
  <React.StrictMode>

    <GlobalStyles />

    <SelectedProjectStateProvider>

      <ProjectStateProvider>

        <App />

      </ProjectStateProvider>
      
    </SelectedProjectStateProvider>

  </React.StrictMode>,

  document.getElementById('root')
);