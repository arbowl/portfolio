import React, { Component } from "react";
import ReactPlayer from "react-player";
import style from "./subcomponents/portfolio.css";
import pfp from "../../static/frontend/expand.png";
import {
        Typography,
        Grid,
        Accordion,
        AccordionSummary,
        AccordionDetails,
        Card,
        CardMedia,
        CardContent
    } from "@material-ui/core";

import FolderSharedIcon from '@material-ui/icons/FolderShared';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CameraIcon from '@material-ui/icons/Camera';
import SecurityIcon from '@material-ui/icons/Security';
import SignalWifi0BarIcon from '@material-ui/icons/SignalWifi0Bar';
import SsidChartIcon from '@mui/icons-material/SsidChart';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import orangebox from "../../static/frontend/orangebox.png";
import before_img from "../../static/frontend/before.jpg";
import after_img from "../../static/frontend/after.jpg";
import board_img from "../../static/frontend/board.jpg";
import diagram_img from "../../static/frontend/gssi_diagram.png";
import meta_img from "../../static/frontend/meta.png";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="portfolio">
                <Grid container spacing={12} alignItems="center" justifyContent="left">
                    <Grid item xs={12}>
                        <Typography variant="h4">Portfolio</Typography>
                    </Grid>
                </Grid>
                <br />
                <p>
                    This is a place for me to demonstrate some of my projects from school, work, and my own free time. Some of it is hardware-
                    based, some of it is software, and a few things are both.
                </p>

                <hr />

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <FolderSharedIcon /><Typography variant="h5">Portfolio Website - April 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={12}>
                            <Grid item xs={12} align="center">
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        image="/static/frontend/meta.png"
                                        alt="Front page"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            The first revision of my website with CSS applied for the first time
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <p>
                                    I created my portfolio website to demonstrate the projects I've made and the skills I've acquired in a
                                    more interactive and demonstrative environment than my resume, and also as a personal challenge. In the
                                    making of this site, I learned: Django, Git CLI, React.js, MySQL, PostgreSQL, Docker, Heroku, and I
                                    strengthened my Python, HTML, CSS, and Javascript.
                                </p>
                                <a href="https://github.com/arbowl/portfolio" id="special-link">Website Repo</a>
                                <p>
                                    Feel free to register, leave a comment, and let me know if something breaks, if something could be
                                    improved, or if the site doesn't render properly on one of your devices.
                                </p>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <AccessTimeIcon /><Typography variant="h5">Bridgewell Visual Timer - UML Capstone - May 2021</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={12} alignItems="center" justifyContent="left">
                            <Grid item xs={12} align="center">
                                <Card sx={{ maxWidth: 400 }}>
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=boVc1fCbjv0"
                                        controls={true}
                                        height={"360px"}
                                        width={"640px"}
                                        playbackRate={2}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <i>A video demonstration of the Visual Timer and its main features</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="https://github.com/arbowl/Capstone-2020-2021" id="special-link">Visual Timer Repo</a>
                            </Grid>
                            <Grid item xs={12}>
                                <p>
                                    For my UML senior design capstone, I had to design a visual device for patients with cognitive disabilities
                                    who had trouble intuitively understanding the passage of time. The device had to be portable, rechargeable,
                                    have few buttons, and not be over-stimulating.
                                </p>
                                <p>
                                    For the hardware, I chose a RaspberryPi 2B due to its compromise between processing power and power draw,
                                    the official RasPi 7" touchscreen, the x728 UPS, two 3,500 mAH li-ion batteries, a 1150 Pelican case for the
                                    enclosure, and a 3D printed mounting panel designed by myself.
                                </p>
                                <p>
                                    For the software, I used the open-source PyGame module to write a Python app which presented the user with a GUI 
                                    that allowed them to choose pre-determined time spans and a numberpad to input their own time. Both the
                                    hardware and software incorporated design choices which took into account potential developmental disabilities
                                    of the people using them, such as muted colors, durability, and accidental reset prevention (the user must
                                    press "Reset" or "Menu" three times to confirm, with an indicator displaying progress).
                                </p>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <CameraIcon /><Typography variant="h5">The Orange Box - Personal Cyberdeck - April 2021</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={12} alignItems="left" justifyContent="left">
                            <Grid item xs={12} align="center">
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image="/static/frontend/orangebox.png"
                                        alt="Front page"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <i>The "Orange Box" folded up, unfolded, and turned on</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <br />
                            </Grid>
                            <Grid item xs={12} align="left">
                                <p>
                                    The Orange Box is a personal project inspired by the Reddit Cyberdeck community, and particularly Jay
                                    Doscher's <a href="https://back7.co/home/project-retrospective-raspberry-pi-field-unit-from-2015-bbbb" id="regular-link">"Raspberry Pi Field Unit"</a>, a portable Raspberry Pi. The purpose of these builds is to emulate
                                    cyberpunk-esque devices popular in 80s dystopian sci-fi.
                                </p>
                                <p>
                                    My personal cyberdeck runs a lightweight Debian Linux build on a Raspberry Pi 4B and is powered by
                                    four rechargeable 3,000 mAH li-ion batteries providing about 8 hours of battery life. I made a custom
                                    3D-printed panel using FreeCAD which features a charging port, a light-up power button, switches for
                                    the screen and fan, two USB 3.0 ports, an ethernet port, and an HDMI port.
                                </p>
                                <p>
                                    What differentiates my build from every other out there is the exceptional power management and monitoring,
                                    the ability to easily connect to a larger TV via HDMI, the wireless keyboard that slots snugly in the case,
                                    and the drivers for various popular console controllers, which allows it to serve as a multimedia
                                    hub for games, movies, music, and internet browsing, whether you're on the move or away at a friend's.
                                </p>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <SecurityIcon /><Typography variant="h5">Personal Cyber Privacy and Security - August 2020</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={12} alignItems="center" justifyContent="left">
                            <Grid item xs={12} align="left">
                            <p>
                                In early 2020, the password for one of my online accounts was leaked, which prompted me to invest in deeper
                                online security and privacy measures. One of the first things I did was create a KeePassXC database, which is
                                a deentralized offline password manager and database, so that all my passwords would be extremely difficult to crack.
                            </p>
                            <a href="https://keepassxc.org/" id="special-link">KeePassXC</a>
                            <p>
                                This got me thinking about online privacy, and I realized there was more to be stolen than just passwords and
                                everything they protect--my data was also exposed. After deleting most of my social media, I turned a spare
                                Raspberry Pi into a Pi-hole, a DNS-level ad and tracker blocker.
                            </p>
                            <a href="https://pi-hole.net/" id="special-link">Pi-hole</a>
                            <p>
                                Next, I wanted a more secure email provider, knowing that Google was free to gather as much information as they
                                wanted through my email (and search history). As a result, I started using Tutanota, a Germany-based encrypted
                                email provider.
                            </p>
                            <a href="https://tutanota.com/" id="special-link">Tutanota</a>
                            <p>
                                As I started to shift my focus from security to privacy as well, I made several browsing habit changes. I
                                changed my browser from Chrome to Firefox, set my search engine to DuckDuckGo, and installed uBlock Origin,
                                DecentralEyes, Privacy Possum/Badger, and ClearURLs to block trackers, anonymize my browsing, and obfuscate
                                whatever I did leave behind.
                            </p>
                            <a href="https://support.mozilla.org/en-US/products/firefox/privacy-and-security" id="special-link">Firefox Privacy and Security</a>
                            <p>
                                The last big change I made was changing my OS from Windows to Fedora, a Linux-based OS which doesn't send my
                                data to Microsoft and which I have much more control over in order to protect what data is being broadcasted
                                and who it is going to.
                            </p>
                            <a href="https://fedoraproject.org/wiki/Legal:PrivacyPolicy" id="special-link">Fedora OS</a>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <SignalWifi0BarIcon /><Typography variant="h5">GSSI Motion Control Table - Spring 2020</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={12} alignItems="center" justifyContent="left">
                            <Grid item xs={12} align="left">
                                <p>
                                    Ground penetrating radar (GPR) works by sending and receiving radar waves into targets to non-destructively several
                                    what could be beyond the surface via the reflectviity of each substance it penetrates. Normally, GPR devices do not
                                    track <i>where</i> they've been, and simply send back the radar data which is then interpreted by an operator.
                                </p>
                                <p>
                                    When I joined as a co-op, my task was to help the team developing a 2D positioning system which could then create
                                    real-time 3D GPR data. To do so, they needed a "control" to test their algorithm with--a way to know exactly
                                    where the antenna traveled to compare to their algorithm.
                                </p>
                                <p>
                                    So, given a wooden frame, I created a three-axis CNC machine by selecting the motors, the drivers, the microcontroller,
                                    and the Intel Next Unit of Computing (NUC) interface. The user drew a 2D path in Inkscape, a visual vector graphic editor,
                                    and imported the saved file into my Python script. The Python script then converted the coordinates into G-Code and sent 
                                    it over a TCP socket to the microcontroller, which was running a Lua script that I wrote which interpeted the G-Code,
                                    converted it to coordinates, sent it to the motors, then sent the timestamped position feedback data back to the Python
                                    script where it was collected and output as a .csv at the end.
                                </p>
                                <a href="https://github.com/arbowl/gssi" id="special-link">XY Table (Python) Repo</a>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image="/static/frontend/gssi_diagram.png"
                                        alt="Front page"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <i>A high-level flowchart describing my project</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <p>
                                    The table was a success and the team was able to release their new algorithm in production the following year. My
                                    manager gave exceptional feedback in a LinkedIn endorsement, which I also quoted in <b>Resume &gt; Endorsements</b>.
                                </p>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <hr />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                    >
                        <SsidChartIcon /><Typography variant="h5">Philips Pogo Pin PCB Respin - Spring 2019</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={12} alignItems="center" justifyContent="center">
                            <Grid item xs={4} align="center">
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image="/static/frontend/board.jpg"
                                        alt="My PCB"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <i>The final revision of my PCB</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <p>
                                    In 2019, when I began my co-op at Philips, a test interface was being examined because the signal path produced
                                    a lot of signal noise, requiring obfuscating software filters to try to isolate the signal of interest:
                                </p>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image="/static/frontend/before.jpg"
                                        alt="Before signal"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <i>The noisy signal from the old PCB</i>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                                <p>
                                    My task was to find out which part of the test system was creating the noise. When I found it was a specific PCB,
                                    I realized it would be a great learning opportunity trying to figure the reason out. I spent the next few months
                                    taking the PCB apart, shaving pads off with scalpels and solvent, creating its schematic, researching noise-cancelling
                                    techniques in PCB design, and creating the new schematic.
                                </p>
                                <p>
                                    My task was meant to end there, but I continued. I learned the PCB design software, xPedition, which previously was
                                    only known by the engineers at Philips on the west coast, which slowed down engineers on the east coast when trying
                                    to create prototypes. Over the next few months, I created a replacement board that reduced signal noise by over 99.7%:
                                </p>
                                <Grid item xs={12} align="center">
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            image="/static/frontend/after.jpg"
                                            alt="After signal"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                <i>The signal with reduced noise using my PCB</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <p>
                                    I spent my remaining time drafting the verification/validation/IQOQ documentation from scratch and leading a team
                                    of international engineers from places including The Netherlands and Costa Rica to implement my new board in
                                    their own test platforms. In 2021, Philips ultrasounds tested using my board hit hospitals for the first time.
                                </p>
                                <p>
                                    My manager gave exceptional feedback to my co-op supervisor, which I quoted on my <a href="/resume">Resume</a> page.
                                </p>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}
