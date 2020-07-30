import React, { Component } from 'react'
import {Link} from 'react-scroll'
import "../App.css"
import "./AboutMe.js"

export default class Sidebar extends Component {
	state = {
		position: 'absolute',
		top: '100%'
	}
	
	listenScrollEvent = e => {
		if (window.scrollY > window.innerHeight) {
			this.setState({position: 'fixed', top: '0px'})
		} else {
			this.setState({position: 'absolute', top: '100%'})
		}

	}

	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent)
	}

	constructor(props) {
		super(props)
		this.onButtonClicked = this.onButtonClicked.bind(this)
		this.state = { currentButton: null }
	}
	
	onButtonClicked (id) {
		this.setState({ currentButton: this.state.currentButton === id ? null : id })
	}



	render() {
		return (
			<nav style={{position: this.state.position, top: this.state.top}} class="navbar navbar-default" id="navbar-example" role="navigation">
				<div class="collapse navbar-collapse navbar-ex1-collapse">
					<ul class="nav navbar-nav">
						<li onClick={() => this.onButtonClicked(0)} style={{backgroundColor: this.state.currentButton === 0 ? "#2374B2" : "#222222"}}><a href="#aboutme">About Me</a></li>
						<li onClick={() => this.onButtonClicked(1)} style={{backgroundColor: this.state.currentButton === 1 ? "#2374B2" : "#222222"}}><a href="#work">Work</a></li>
						<li onClick={() => this.onButtonClicked(2)} style={{backgroundColor: this.state.currentButton === 2 ? "#2374B2" : "#222222"}}><a href="#skills">Skills</a></li>
						<li onClick={() => this.onButtonClicked(3)} style={{backgroundColor: this.state.currentButton === 3 ? "#2374B2" : "#222222"}}><a href="#projects">Projects</a></li>
						<li onClick={() => this.onButtonClicked(4)} style={{backgroundColor: this.state.currentButton === 4 ? "#2374B2" : "#222222"}}><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

