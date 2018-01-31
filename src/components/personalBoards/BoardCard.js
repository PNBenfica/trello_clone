import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import className from "classnames"
import './BoardCard.css'

class BoardCard extends Component {
    
    constructor(args){
        super(args)
        this.state = { transparent: true }
    }

    componentDidMount(){
        setTimeout(() => this.setState({ transparent: false }), this.props.timeout)
    }

    render() {

        const { color, id, name } = this.props
        const { transparent } = this.state

        return (
            <NavLink to={"/board/" + id} className={className("board-card personal-board-card", { transparent })} >
                <div className="inner-item">
                    <div className="background" style={{backgroundColor: color}}></div>
                    <p>{name}</p>
                </div>
            </NavLink>
        )

    }
}

export default BoardCard