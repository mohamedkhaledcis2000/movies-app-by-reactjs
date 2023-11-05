import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Moviecard from "./Components/Moviecard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
      <BrowserRouter>
      {/* <App /> */}
      <Routes>
          <Route exact path='/' element={<App/>}/>
          <Route path="/movie/:id" element={<MovieDetails />} /> 
          </Routes>
      </BrowserRouter>
      
    </React.StrictMode>

 
);
