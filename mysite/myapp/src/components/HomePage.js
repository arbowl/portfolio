import React, { Component } from "react";
import Default from ".//subcomponents/Default";
import Portfolio from "./Portfolio";
import Calendar from "./Calendar";
import Stocks from "./Stocks";
import Servers from "./Servers";
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
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/album" element={<Album />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/stocks" element={<Stocks />} />
                    <Route path="/servers" element={<Servers />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        );
    }
}