import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Attraction from "./components/Attraction";
import Delicacy from "./components/Delicacy";
import Activity from "./components/Activity";
import Footer from "./components/Footer";
import More from "./components/More";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path="/lily516liu/attraction" element={<Attraction />}></Route>
      <Route path="/lily516liu/delicacy" element={<Delicacy />}></Route>
      <Route path="/lily516liu/activity" element={<Activity />}></Route>
      <Route path="/lily516liu/more" element={<More />}></Route>
      <Route exact path="/lily516liu" element={<Homepage />}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
