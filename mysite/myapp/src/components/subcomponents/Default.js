import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import styles from "./default.css";
import me from "../../../static/frontend/itsme.png";


export default class Default extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="default">
                <Typography variant="h1">Hello,</Typography>
                <h2>I'm Drew Bowler! Engineer, Programmer, and Problem-Solver.</h2>
                <hr></hr>
                <div id="default-container">
                    <div id="default-text">
                        <p>I am a 2021 graduate of UMass Lowell with a bachelor's degree in Computer Engineering. I wanted a place to collect my projects,
                            and the making of this site became a project all on its own--no fill-in-the-blank templates, no borrwed designs, no guides
                            followed down to the step.
                        </p>
                        <p>
                            This site was created using the Django framework, some Python logic, HTML/CSS layout, React.js page content, and a MySQL
                            database, all of which I've taught myself to varying degrees throughout my time in college and beyond. Though it's a decent 
                            start, I am immensely eager for the opportunity to develop these skills professionally.
                        </p>
                        <p>
                            Feel free to explore, register an account, drop a comment, and reach out with questions, comments and suggestions.
                        </p>
                    </div>
                    <div id="default-img">
                        <img src={me}></img>
                        <p>
                            <i>Philips 2019 Co-op, last day</i>
                        </p>
                    </div>
                    <div id="default-clr"></div>
                </div>
                <h2>Navigation:</h2>
                <p id="default-p"><b>Resume: </b> My resume to date and some supplementary info</p><br></br>
                <p id="default-p"><b>Portfolio:</b> School/career/personal projects showing the development of my technical skills</p><br></br>
                <p id="default-p"><b>Photos:</b> I don't use social media much, so this is a place for me to show off some of my photos</p><br></br>
                <p id="default-p"><b>Calendar:</b> An online planner for myself to keep track of what I'm up to and what's coming up</p><br></br>
                <p id="default-p"><b>Servers:</b> File hosting for the multiplayer servers I host for my friends</p><br></br>
            </div>
        );
    }
}