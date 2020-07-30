import React, { Component } from 'react'
// import { Link } from "react-scroll";
import { Link } from 'react-router-dom';
import '../App.css';


export default class Toolbar extends Component {
    render() {
        return (
            <div id='toolbar'>
                <div class='toolbarButton h1'>
                    <Link
                        class="toolbarButtonActive"
                        to="/"
                        > Interactive Resume
                    </Link>
                </div>
                <div class='toolbarButton h1'>
                    <Link
                        class="toolbarButtonActive"
                        to="/blog"
                        > Blog
                    </Link>
                </div>
            </div>

        )
    }
}