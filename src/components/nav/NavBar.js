import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  	render() {

        const { color } = this.props
		const styles = color === null ? { } : { "backgroundColor": color }
		
		return ( 
			<nav className="main-nav"  style={styles}>
				<p>Trellox</p>
			</nav>
		)
	}
}

export default NavBar
