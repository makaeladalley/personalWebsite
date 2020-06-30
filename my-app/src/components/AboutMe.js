import React, { Component } from 'react'
import pdf from '../resume.pdf'
import "./Sidebar.js"

export default class Top extends Component {

    render() {
        return (
            <div class="containerSmall" id="aboutme" >
                <h2>About Me</h2>
                <p>Hi, my name is Makaela Dalley. I'm a recent computer science grad from the University of Michigan.
                    Some of my hobbies include running, cooking and teaching swim lessons.
                    BEEP BOOP TEST....
                </p>
                <div style={{textAlign:"center"}}>
                    <a class="mail" href={pdf} download="dalleyResume.pdf">
                        <span style={{textAlign:"center", fontSize: "20px"}}>Resume</span>
                        <img class="icon" align="right" src={require("../images/download.png")}></img>     
                    </a>
                </div>
            </div>
        )
    }
}