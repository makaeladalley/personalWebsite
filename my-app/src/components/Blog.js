import React, { Component } from 'react'
import '../App.css';


export default class Blog extends Component {
    render() {
        return (
            <div>
                <img class='headshot' style={{paddingTop: '60px'}} src={require("../images/const.jpg")}></img>
            </div>
        )
    }
}