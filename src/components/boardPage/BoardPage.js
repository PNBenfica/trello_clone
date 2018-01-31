import React from 'react'
import { NavLink } from 'react-router-dom'
import className from 'classnames'

export default class BoardPage extends React.Component {

    constructor(args){
        super(...args)
        this.state = {
            showArrow: false
        }
        // setInterval(() => {
        //   this.setState({ showArrow: !this.state.showArrow })
        // }, 2000)
    }

    componentWillMount(){
        const boardId = this.props.match.params.id
        this.setActiveBoard(boardId)
    }

    componentDidMount(){
        // setTimeout(() => this.setState({ showArrow: true }), 2000)
    }

    setActiveBoard(boardId){
        this.props.setActiveBoard(boardId)
    }

    render() {

        const { board, match, fetching } = this.props
        const styles = fetching ? { } : { "backgroundColor": board.color }

        return (
            <div className="full-page slide-bottom-page" style={styles} onClick={() => this.setState({ showArrow: !this.state.showArrow })}>
                <NavLink to="/" exact onClick={() => this.setActiveBoard(null)} className={className("rounded-arrow", this.state.showArrow? 'rounded-arrow-visible':'rounded-arrow-invisible')}>
                    <div className="main"/>
                    <div className="left"/>
                    <div className="right"/>
                </NavLink>
            </div>
        )
    }
}