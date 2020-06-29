import React, { Component } from 'react'

export default class Top extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        window.location.href = `mailto:makaela@umich.edu`;
    }
    render() {
        return (
            <div class="container" id="contact">
                <h2>Let's get in touch.</h2>
                <div style={{textAlign:"center"}}>
                    <a class="mail" href="mailto:makaela@umich.edu">
                        <img class="icon" align="left" src={require("../images/emailIcon.png")}></img>    
                        <span style={{textAlign:"center", fontSize: "20px"}}>Message Me</span>
                    </a>
                </div>
            </div>
        )
    }
}