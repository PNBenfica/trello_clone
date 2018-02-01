import React from 'react'
import { NavLink } from 'react-router-dom'
import './BoardPage.css'
import DelayedCSSTransition from '../animations/DelayedCSSTransition'

export default class BoardPage extends React.Component {

    constructor(args){
        super(...args)
        this.state = {
            showArrow: true
        }
    }

    componentWillMount(){
        const boardId = this.props.match.params.id
        this.setActiveBoard(boardId)
    }

    setActiveBoard(boardId){
        this.props.setActiveBoard(boardId)
    }

    onArrowClick(){
        this.setState({ showArrow: false })
        this.setActiveBoard(null)
    }

    render() {

        const { board, fetching } = this.props
        const styles = fetching ? { } : { "backgroundColor": board.color }

        return (
            <div className="full-page slide-bottom-page board-page" style={styles} onClick={() => this.setState({ showArrow: !this.state.showArrow })}>
            
                <DelayedCSSTransition in={this.state.showArrow} delay={1300} mountOnEnter={true} unmountOnExit={true} classNames="rounded-arrow" timeout={{enter:2000, exit: 2000}}>
                    <NavLink to="/" exact onClick={this.onArrowClick.bind(this)} className="rounded-arrow">
                        <div className="main"/>
                        <div className="left"/>
                        <div className="right"/>
                    </NavLink>
                </DelayedCSSTransition>
                
            </div>
        )
    }
}