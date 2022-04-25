import React, { Component } from "react";
import {
        Button,
        Typography,
        Grid,
        Card,
        CardActionArea,
        CardContent,
        CardMedia
    } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./default.css";
import me from "../../../static/frontend/itsme.png";
import { Forward, SettingsOverscanOutlined } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import img01 from "../../../static/frontend/itsme.png";

const     colorArray = [41,35,51];

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
                        <hr />
                    </div>
                    <div id="default-img">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    src="{% static 'frontend/itsme.png' %}"
                                    title="Me"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Philips, 2019
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        My last day of my co-op at Philips before returning post-graduation
                                        in 2021
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div id="default-clr"></div>
                </div>
                <br />
                <Grid container spacing={12} alignItems="center" justifyContent="center">
                    <Grid item xs={4} align="center">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="/static/frontend/linkedin_prof.png"
                                    title="LinkedIn Profile"
                                    height="120px"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Join my network!
                                    </Typography>
                                    <Button
                                        href="https://linkedin.com/in/drewbowler"
                                        variant="contained"
                                        color="primary"
                                        startIcon={<LinkedInIcon />}
                                        size="large"
                                    >
                                        LinkedIn
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4} align="center">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="/static/frontend/github_prof.png"
                                    title="GitHub Profile"
                                    height="120px"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        View my work!
                                    </Typography>
                                    <Button
                                        href="https://github.com/arbowl"
                                        variant="contained"
                                        size="large"
                                        startIcon={<GitHubIcon />}
                                    >
                                        GitHub
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4} align="center">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="/static/frontend/code_example.png"
                                    title="Source Code"
                                    height="120px"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Behind the scenes!
                                    </Typography>
                                    <Button
                                        href="https://github.com/arbowl/portfolio"
                                        variant="contained"
                                        size="large"
                                        color="secondary"
                                        startIcon={<CodeIcon />}
                                    >
                                        Source
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                        
                </Grid>
            </div>
        );
    }
}