import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import style from "./subcomponents/planner.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";


const localizer = momentLocalizer(moment);

const myEventsList = [
    { start: new Date(), end: new Date(), title: "Now"}
];

export default class Planner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <h1>Calendar</h1>
                <hr></hr>
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600 }}
                />
            </div>
        );
    }
}