import React, { Component } from 'react'
import DelayedCSSTransition from '../animations/DelayedCSSTransition'
import './BoardCard.css'

class BoardCard extends Component {
    
    constructor(args){
        super(args)
        this.state = { visible: true }
    }

    render() {

        const { timeout } = this.props
        return (
            <DelayedCSSTransition delay={timeout} mountOnEnter={true} classNames="board-card" timeout={timeout + 1000}>
                { this.props.children }
            </DelayedCSSTransition>
        )

    }
}

export default BoardCard