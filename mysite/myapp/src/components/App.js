import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage'


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomePage />;
    }
}

export class Updates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>News &amp; Updates</h1>
                <hr></hr>
                    <p>Lorem ipusm blah blah blah</p>
                    <p>Another lorem ipsum</p>
                <hr></hr>
                <p>Stuff goes here</p>
                <p>Maybe someday... but not today. Today just has filler garbage to take up space. Like this!</p>
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

const updatesDiv = document.getElementById("updates");
render(<Updates />, updatesDiv)