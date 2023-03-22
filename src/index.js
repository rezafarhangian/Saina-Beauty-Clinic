import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import ServiceCategory from "./Context/ServiceCategory"
import SelecTheService from "./Context/SelectTheService"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServiceCategory>
      <SelecTheService>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SelecTheService>
    </ServiceCategory>
  </React.StrictMode>
);

