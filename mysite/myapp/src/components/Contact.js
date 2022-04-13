import React, { Component } from "react";
import "./subcomponents/contact.css"
import pfp from "../../static/frontend/contact.png";
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormControl,
    FormHelperText,
    Radio,
    RadioGroup,
    FormControlLabel
} from "@material-ui/core"

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={pfp} id="pfp"></img>
                <h1 id="contact-me">Contact Me:</h1>
                <br></br>
                <br></br>
                <Grid container spacing={1}>
                    <Grid item xs={4} align="center">
                        <Typography variant="b">Email: </Typography>
                    </Grid>
                    <Grid item xs={8} align="center">
                        <Typography variant="p">arbowl@tutanota.com</Typography>
                    </Grid>

                    <Grid item xs={4} align="center">
                        <Typography variant="strong">Phone:</Typography>
                    </Grid>
                    <Grid item xs={8} align="center">
                        <Typography variant="p">(978) 763-5124</Typography>
                    </Grid>


                </Grid>
            </div>
        );
    }
}