import React, { Component } from "react";
import {
        Accordion,
        AccordionSummary,
        AccordionDetails,
        Button,
        Typography,
        Divider,
        Grid,
        Card,
        CardActionArea,
        CardActions,
        CardContent,
        CardMedia, 
        BottomNavigation,
        BottomNavigationAction
    } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./default.css";
import me from "../../../static/frontend/itsme.png";
import { Forward, SettingsOverscanOutlined } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';


export default class Default extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="default">
                <Typography variant="h2">Hello,</Typography>
                <h2>I'm Drew Bowler! Engineer, Programmer, and Developer.</h2>
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
                            Please feel free to explore and leave a comment!
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
                <br />
                <br />
                <br />
                <Grid container spacing={12} alignItems="center" justifyContent="center">
                    <Grid item xs={3} align="right">
                        <Button href="https://linkedin.com/in/drewbowler" variant="contained" size="large" startIcon={<LinkedInIcon />}>LinkedIn</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    <Grid item xs={3} align="center">
                        <Button href="https://github.com/arbowl" variant="contained" size="large" startIcon={<GitHubIcon />}>GitHub</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    <Grid item xs={3} align="left">
                        <Button href="https://github.com/arbowl/portfolio" variant="contained" size="large" startIcon={<CodeIcon />}>Source Code</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}