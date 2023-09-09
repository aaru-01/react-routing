import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

function App() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      return <Home />
    case "/about":
      return <About />
    case "/contact":
      return <Contact />
    default:
      return <h1>Ye Path Galat Hai.....</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<> <App /></>);


