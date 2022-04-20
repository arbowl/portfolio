import React, { Component } from "react";
import style from "./subcomponents/contact.css"
import pfp from "../../static/frontend/headshot.jpg";
import {
    Grid,
    Typography
} from "@material-ui/core"


export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="contact">
                <h1>Contact</h1>
                <hr></hr>
                <div id="contact-container">
                    <div id="contact-img">
                        <img src={pfp} id="default-img"></img>
                    </div>
                    <div id="contact-text">
                        <br></br>
                        <Grid container spacing={12} alignItems="center" justifyContent="left">
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Feel free to reach out regarding questions, suggestions for the site, or business inquiries.
                                    Please keep messages strictly on-topic. Thank you!
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h5"><hr></hr></Typography>
                            </Grid>

                            <Grid item xs={5}>
                                <Typography variant="h5">Full Name: </Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="p">Andrew Bowler</Typography>
                            </Grid>

                            <Grid item xs={5}>
                                <Typography variant="h5">Pref. Name:</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="p">Drew Bowler</Typography>
                            </Grid>

                            <Grid item xs={5}>
                                <Typography variant="h5">Phone:</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="p">(978) 763-5124</Typography>
                            </Grid>

                            <Grid item xs={5}>
                                <Typography variant="h5">Email:</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="p">arbowl@tutanota.com</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                                <Typography variant="h5"><hr></hr></Typography>
                        </Grid>
                        <br></br>
                        <a href="mailto: arbowl@tutanota.com" id="contact-link">Email</a>
                        <a href="https://linkedin.com/in/drewbowler" id="contact-link">LinkedIn</a>
                    </div>
                    <div id="contact-clr"></div>
                    <br></br>
                    <hr></hr>
                </div>
            </div>
        );
    }
}