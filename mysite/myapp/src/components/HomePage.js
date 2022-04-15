import React, { Component } from "react";
import Default from "./subcomponents/Default";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Planner from "./Planner";
import Stocks from "./Stocks";
import About from "./About";
import Contact from "./Contact";
import Album from "./Album";
import {
    BrowserRouter as Router, Routes, Route, Redirect
} from "react-router-dom"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact={true} element={<Default />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/album" element={<Album />} />
                    <Route path="/calendar" element={<Planner />} />
                    <Route path="/stocks" element={<Stocks />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        );
    }
}