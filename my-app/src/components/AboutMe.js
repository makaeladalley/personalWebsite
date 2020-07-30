import React, { Component } from 'react'
import pdf from '../resume.pdf'
import "./Sidebar.js"

export default class Top extends Component {

    render() {
        return (
            <div class="containerSmall" id="aboutme" >
                <h2>About Me</h2>
                <img class="headshot" src={require("../images/headshot.jpg")}></img>
                <p>Hi, my name is Makaela Dalley. I'm a recent computer science grad from the University of Michigan looking to start my career.
                    Some of my interested include front-end web and app development and data science.
                    As a Michigander, I'm currently splitting my time between Ann Arbor and Grand Rapids.
                    Growing up I spent much of my time in the water, whether that was with my USA swim team or on the beaches of Lake Michigan.
                    These days you can find me running trails, at the local brewery or at Grand Haven beach. 
                </p>
                <div style={{textAlign:"center"}}>
                    <a class="mail" href={pdf} download="mdalleyResume.pdf">
                        <span style={{textAlign:"center", fontSize: "18px"}}>Download Resume PDF</span>
                        <img class="icon" align="right" src={require("../images/download.png")}></img>     
                    </a>
                </div>
            </div>
        )
    }
}