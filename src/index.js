import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Movie from "./components/Movie";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path="/lily516liu/about" element={<About />}></Route>
      <Route path="/lily516liu/movie" element={<Movie />}></Route>
      <Route exact path="/lily516liu" element={<Homepage />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
