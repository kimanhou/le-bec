import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Shop } from "./components/Shop/Shop";

function App() {
    const [scrollableClassName, setScrollableClassName] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setScrollableClassName("scrollable");
        }, 3600);
    }, []);
    return (
        <div className={`app-container ${scrollableClassName}`}>
            <div className="app app-container-child">
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
            <LandingPage className="app-container-child" />
        </div>
    );
}

export default App;
