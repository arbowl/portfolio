import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import {
    Grid,
    Typography
} from "@material-ui/core"
import style from "./subcomponents/planner.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default class Planner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Grid container spacing={12}>
                    <Grid item xs={12} align="center">
                        <h1>Calendar</h1>
                        <hr />
                    </Grid>
                    <Grid item xs={12}>
                        <Calendar
                            localizer={localizer}
                            events={myEventsList}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 600 }}
                        />
                        <br />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Typography>
                            (I am terrible at remembering important dates, such as birthdays, so I am
                            working on this calendar to help keep track!)
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const myEventsList = [
    {
        start: new Date(),
        end: new Date(),
        title: "Now"
    },
    {
        start: "2022-08-04 00:00:00",
        end: "2022-08-04 23:59:59",
        title: "My birthday"
    },
    {
        start: "2022-04-27 00:00:00",
        end: "2022-04-27 23:59:59",
        title: "Tom Brennan's Birthday"
    },
    {
        start: "2022-04-29 00:00:00",
        end: "2022-04-29 23:59:59",
        title: "Henry's Birthday"
    }
];