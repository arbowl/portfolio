import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage"
import Updates from ".//subcomponents/Updates"


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomePage />;
    }
}

export class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Updates />;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

const updatesDiv = document.getElementById("updates");
render(<Sidebar />, updatesDiv)