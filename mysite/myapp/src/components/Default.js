import React, { Component } from "react";


export default class Default extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to my site!</h1>
                <hr></hr>
                <p>Here is where I store personal/hobby data and show off my projects.</p>
                <p><b>Portfolio:</b> School/career/personal projects showing the development of my technical skills.</p>
                <p><b>Social:</b> A place for my friends and viewers to leave notes and make good use of the database.</p>
                <p><b>Chores:</b> The chore rotation for the roommates in my apartment on a weekly basis.</p>
                <p><b>Stock Ticker:</b> An API which scrapes data from the web and updates stock prices in real time.</p>
                <p><b>Servers:</b> A way to pull data from the online multiplayer servers I host in case my computer is unavailable.</p>
            </div>
        );
    }
}