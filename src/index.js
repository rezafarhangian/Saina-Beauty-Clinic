import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import ServiceCategory from "./Context/ServiceCategory"
import SelecTheService from "./Context/SelectTheService"
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ServiceCategory>
        <SelecTheService>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </SelecTheService>
      </ServiceCategory>
    </BrowserRouter>
  </React.StrictMode>
);

