import React, { Component } from 'react'
import "./Sidebar.js"

export default class Top extends Component {

    render() {
        return (
            <div class="containerSmall" id="aboutme" onClick={() => this.onButtonClicked(0)} >
                <h2>About Me</h2>
                <p>Hi, my name is Makaela Dalley. I'm a recent computer science grad from the University of Michigan.
                    Some of my hobbies include running, cooking and teaching swim lessons.
                </p>
            </div>
        )
    }
}