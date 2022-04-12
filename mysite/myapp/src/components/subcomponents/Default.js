import React, { Component } from "react";


export default class Default extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                <h1>Welcome to my site!</h1>
                <hr></hr>
                <p>Here is where I store personal/hobby data and show off my projects. This site is programmed in Python, powered by Django,
                    presented in React.js, and stored in MySQL. There's also a fair amount of custom HTML and CSS to provide a basic layout.</p>
                <p><b>Portfolio:</b> School/career/personal projects showing the development of my technical skills.</p>
                <p><b>Photo Album:</b> I don't use social media much, so this is a place for me to show off some of my photos.</p>
                <p><b>Calendar:</b> The chore rotation for the roommates in my apartment on a weekly basis.</p>
                <p><b>Stock Ticker:</b> An API which scrapes data from the web and updates stock prices in real time.</p>
                <p><b>Servers:</b> A way to pull data from the online multiplayer servers I host in case my computer is unavailable.</p>
            </p>
        );
    }
}