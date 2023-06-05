import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Routes>
                    <Route path={"/contact"} element={<Contact />}></Route>

                    <Route path={"/shop"} element={<Shop />}></Route>

                    <Route path={"/about"} element={<About />}></Route>

                    <Route path={"/"} element={<Home />}></Route>
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
