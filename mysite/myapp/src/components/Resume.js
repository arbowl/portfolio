import React, { Component } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import { Typography, Grid } from "@material-ui/core";
import style from "./subcomponents/resume.css";
import resume from "../../static/frontend/resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="resume">
                <h1 id="resume-header">Resume</h1>
                <div id="resume-blurb">
                    <p>
                        A major facet of my resume that I want to highlight is that I am a very capable learner. I learned every technology and skill listed 
                        in my co-ops on the job to drive my projects to success, and retained the skills for my next endeavor. I am teachable, I learn quickly,
                        and I'm reliable. Be sure to check out <b>Portfolio</b> on the sidebar for in-depth looks at some of my projects listed here!
                    </p>
                </div>
                <hr></hr>
                <div id="resume-pdf">
                    <Document
                        file={resume}
                        onLoadError={console.error}
                        style={{ width: '2vw', height: 'auto' }}
                    >
                        <Page pageIndex={0}/>
                    </Document>
                </div>
                <div id="endorsements">
                    <p><h2 id="endorsements-header">Endorsements: </h2>
                        <i>
                            "We hired Drew at GSSI as an intern in 2019, and on all counts he exceeded our expectations for performance. Not only did Drew
                            have an excellent work ethic, requiring little supervision, but he wasn't afraid to ask questions or ask for help and
                            clarification when needed. He had attention to detail and delivered a working motion control test platform which we use today
                            for testing our radars and antennas. I highly recommend Drew not only for his enthusiasm and work ethic, but for his willingness
                            to push through challenges and the focus to get to the end result.”
                        </i>
                        <br></br>
                        <u>- TJ Bordelon, Manager at Geophysical Survey Systems, Inc. (LinkedIn Endorsement)</u>
                        <br></br>
                        <br></br>
                        <i>
                            "Drew has been an exceptional student over the last six months taking on many difficult and unfamiliar tasks and coming
                            up with working solutions. Drew demonstrates exceptional attention to detail and is eager to share his learnings with
                            the larger team."
                        </i>
                        <br></br>
                        <u>- Manager, Philips Healthcare (UML Co-Op Evaluation)</u>
                    </p>
                </div>
                <a href={resume} download id="resume-link">Download Resume</a>
                <br></br>
            </div>
        );
    }
}
