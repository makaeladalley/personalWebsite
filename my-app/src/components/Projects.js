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
                </div>
                <div>
                    <h1>This Website</h1>
                    <h4 style={{fontSize: "18px"}}>UI Design - UX Design - React</h4>
                    <p></p>
                </div>
            </div>
        )
    }
}