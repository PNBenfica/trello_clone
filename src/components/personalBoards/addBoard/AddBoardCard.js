import React, { Component } from 'react'
import BoardCard from "../BoardCard"
import className from "classnames"
import enhanceWithClickOutside from 'react-click-outside'
import { CSSTransition } from 'react-transition-group'

import './AddBoardCard.css'

export default enhanceWithClickOutside(class AddBoardCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            focus: false
        }
    }

    
    handleClickOutside() {
        this.setFocus(false);
    }

    focus(){
        this.setFocus(true)
    }

    setFocus(focus){
        this.setState({
            focus
        })
    }

  	render() {

        let { timeout } = this.props
        let { focus } = this.state

		return (
            <BoardCard timeout={timeout}>
                <div className={className("board-card add-board-card", { focus })} onClick={this.setFocus.bind(this)}>
                    <div className="inner-item">
                        <div className="row-container">
                            <div className="row">
                                <div className="plus-icon"><div className="plus-icon-inner-item"><div></div><div></div></div></div>

                                <CSSTransition in={!focus} unmountOnExit={true} timeout={1000} classNames="fade">
                                    <p>Add new board</p>
                                </CSSTransition>
                            </div>
                        </div>
                    </div>
                </div>
            </BoardCard>
        )
	}
})
