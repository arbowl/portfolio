import React, { Component } from "react";
import { Tooltip, Grid, Typography, ButtonGroup, Button } from "@material-ui/core";
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
                            and the making of this site became a project all on its own--no fill-in-the-blank templates, no borrowed designs, no frameworks
                            copied from guides.
                        </p>
                        <p>
                            This site was created using the Django framework, some Python logic, HTML/CSS layout, React.js page content, and a MySQL
                            database, all of which I've taught myself to varying degrees throughout my time in college and beyond. Though it's a decent 
                            start, I am immensely eager for the opportunity to develop these skills professionally.
                        </p>
                        <p>
                            Feel free to explore, register an account, drop a comment, and reach out with questions, comments and suggestions.
                        </p>
                        <hr></hr>
                    </div>
                    <div id="default-img">
                        <img src={me}></img>
                        <p>
                            <i>Philips 2019 Co-op, last day</i>
                        </p>
                    </div>
                    <div id="default-clr"></div>
                </div>
                <Grid container spacing={12} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h4">Navigation:</Typography>
                    </Grid>
                
                    <Grid item xs={12} align="center">
                        <ButtonGroup variant="contained" size="large" aria-label="large outlined button group">
                            <Tooltip title="A place for my resume and endorsements" placement="top"><Button href="/resume">Resume</Button></Tooltip>
                            <Button sx={{m: 1}}>Portfolio</Button>
                            <Button>Photos</Button>
                            <Button>Calendar</Button>
                            <Button>Servers</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        );
    }
}