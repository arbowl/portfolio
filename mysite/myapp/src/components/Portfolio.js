import React, { Component } from "react";
import ReactPlayer from "react-player";
import style from "./subcomponents/portfolio.css";
import pfp from "../../static/frontend/expand.png";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1 id="portfolio-top">Portfolio - </h1> <h3 id="portfolio-top">School, Projects, Hobbies</h3>
                <hr></hr>
                <p>

                </p>
                <hr></hr>
                <br />
                <input type="checkbox" id="expand-1" />
                <div class="portfolio-deck desc1">
                    <div id="portfolio-overlay"><label for="expand-1"><img src={pfp} width="50px;" height="50px;"/></label></div>
                    <h3 id="portfolio-header">Capstone Visual Timer - UML Senior Design Project - May 2021</h3>
                    <div id="portfolio-embed">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=boVc1fCbjv0"
                            controls={true}
                            height={"360px"}
                            width={"640px"}
                            playbackRate={2}
                        />
                    </div>
                    <a href="https://github.com/arbowl/Capstone-2020-2021">Capstone Visual Timer Repo</a>
                    <div id="portfolio-description">
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
                            hardware and software incorporated design choices 
                        </p>
                    </div>
                </div>

                <hr></hr>

                <input type="checkbox" id="expand-2" />
                <div class="portfolio-deck desc2">
                    <div id="portfolio-overlay"><label for="expand-2"><img src={pfp} width="50px;" height="50px;"/></label></div>
                    <h3 id="portfolio-header">The Orange Box - Personal Cyberdeck - April 2021</h3>
                    <div id="portfolio-description">
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
                    </div>
                </div>

                <hr></hr>

                <input type="checkbox" id="expand-3" />
                <div class="portfolio-deck desc3">
                    <div id="portfolio-overlay"><label for="expand-3"><img src={pfp} width="50px;" height="50px;"/></label></div>
                    <h3 id="portfolio-header">Personal Cyber Privacy and Security - August 2020</h3>
                    <div id="portfolio-description">
                        <p>

                        </p>
                    </div>
                </div>

            </div>
        );
    }
}
