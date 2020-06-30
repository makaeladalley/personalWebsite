import React, { Component } from 'react'
import '../App.css';


export default class Projects extends Component {
    render() {
        return (
            <div class="containerSmall" style={{background: "white"}} id="projects">
                <h2>Projects</h2>
                <div>
                    <h1>CrewCam</h1>
                    <h4 style={{fontSize: "18px"}}>Mobile Application | Fall 2019</h4>
                    <p>CrewCam enables groups to record, edit and post clips quickly by syncing their phones while recording. All audio and video is shared so that a clip can be cut to show the best angles and commentary from each user.</p>
                    <div style={{textAlign:"center"}}>
                        <a class="projectImg" href="https://github.com/btajfel/Gold-Team" target="_blank">
                            <span style={{textAlign:"center", fontSize: "13px"}}>See project on GitHub</span>
                            <img class="icon" align="right" src={require("../images/github.png")}></img>     
                        </a>
                    </div>
                </div>
                <br></br>
                <hr class="line"></hr>
                <br></br>
                <div>
                    <h1>Personal Website</h1>
                    <h4 style={{fontSize: "18px"}}>UI / UX Design - React JS - HTML / CSS</h4>
                    <p>Used React JS to create my own personal website/interactive resume. Hope you enjoy :)</p>
                    <div style={{textAlign:"center"}}>
                        <a class="projectImg" href="https://github.com/makaeladalley/personalWebsite" target="_blank">
                            <span style={{textAlign:"center", fontSize: "13px"}}>See project on GitHub</span>
                            <img class="icon" align="right" src={require("../images/github.png")}></img>     
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}