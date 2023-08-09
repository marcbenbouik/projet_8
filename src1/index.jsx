import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Header from "./components/Header";
import Propos from "./pages/a-propos";
import Logement from "./pages/fiche-logement";
import Error from "./pages/Error";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
      <React.StrictMode>
            <Router>
                  <Header />
                  <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/a-propos' element={<Propos />} />
                        <Route path='/logement/:id' element={<Logement />} />
                        <Route path='*' element={<Error />} />
                        <Route path='/error' element={<Error />} />
                  </Routes>
                  <Footer />
            </Router>
      </React.StrictMode>,
      document.getElementById("root")
);
