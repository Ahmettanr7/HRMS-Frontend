import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <BrowserRouter>
  <ToastProvider><App/></ToastProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
