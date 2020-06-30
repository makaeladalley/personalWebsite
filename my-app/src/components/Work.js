import React, { Component } from 'react'
import '../App.css';


export default class Work extends Component {
    render() {
        return (
            <div class="container" style={{background: "white"}} id="work">
                <h2>Work</h2>
                <h1>Farmers Insurance Group</h1>
                <h4 style={{fontSize: "18px"}}>Software Engineer Intern | May-August 2019</h4>
                <ul>
                    <li>Designed and tested APIs to automate the claims process</li>
                    <li>Worked with SQL databases to report customer policy information</li>
                    <li>Used C#.NET to create desktop applications to organize and interpret customer data</li>
                </ul>
            </div>
        )
    }
}