import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App';
import SignUp from './signUp/SignUp';
import Approved from './approved/approved';
import Denied from './denied/denied';
import Review from './review/review';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/approved" element={<Approved/>} />
        <Route exact path="/denied" element={<Denied/>} />
        <Route exact path="/review" element={<Review/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
