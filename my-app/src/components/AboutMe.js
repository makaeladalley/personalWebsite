import React, { Component } from 'react'
import "./Sidebar.js"

export default class Top extends Component {

    render() {
        return (
            <div class="containerSmall" id="aboutme" onClick={() => this.onButtonClicked(0)} >
                <h2>About Me</h2>
                <p>Hi, I'm Makaela Dalley. I'm a recent grad from the University of Michigan.</p>
            </div>
        )
    }
}