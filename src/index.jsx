import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header/Header";
import Propos from "./pages/propos";
import Logement from "./pages/logement";
import Error from "./pages/error";
import Footer from "./components/footer/Footer";
import "../src/styles/reset.css";
import "../src/styles/style.css";

ReactDOM.render(
      <React.StrictMode>
            <Router>
                  <main>
                        <Header />
                        <Routes>
                              <Route path='/' element={<Home />} />
                              <Route path='/a-propos' element={<Propos />} />
                              <Route
                                    path='/logement/:id'
                                    element={<Logement />}
                              />
                              <Route path='*' element={<Error />} />
                              <Route path='/error' element={<Error />} />
                        </Routes>
                  </main>
                  <Footer />
            </Router>
      </React.StrictMode>,
      document.getElementById("root")
);
