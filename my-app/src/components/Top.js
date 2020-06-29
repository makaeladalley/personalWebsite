import React, { Component } from 'react'
import '../App.css';


export default class Top extends Component {
    render() {
        return (
            <div className="main" position="relative" id="top">
                <div className="container">
                    <h1 style={{textAlign: "center", marginTop: "150px", color: "white", fontSize: "64px"}}>Makaela Dalley</h1>
                    <hr width="50%" style={{border: "1px solid white"}}></hr>
                    <h3 style={{textAlign: "center", color:"white"}}>Software Engineer</h3>
                </div>
                <a href="#aboutme">
                    <img className="zoom" id="down" alt="mtns" src={require("../images/downArrow.png")}></img>
                </a>
            </div>
        )
    }
}