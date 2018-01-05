import React, { Component } from 'react'
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
            <a href={"#/board/" + id} className={className("board-card personal-board-card", { transparent })} >
                <div className="inner-item">
                    <div className="background" style={{backgroundColor: color}}></div>
                    <p>{name}</p>
                </div>
            </a>
        )

    }
}

export default BoardCard