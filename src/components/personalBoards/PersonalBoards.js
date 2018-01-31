import React, { Component } from 'react'
import BoardCard from "./BoardCard"
import PageBoardSection from "./PageBoardSection"
import UserSvg from "../../img/User"
import "./PersonalBoards.css"

class PersonalBoards extends Component {

    componentWillMount(){
        this.props.fetchBoards()
    }

  	render() {

        let { boards } = this.props
        boards = Object.values(boards.boardsById)

		return (
            <PageBoardSection name="Personal Boards" icon={<UserSvg/>}>
                <div className="personal-boards-grid">
                    {boards.map((board,i) => <BoardCard key={i} {...board} timeout={i * 200} /> )}
                </div>
            </PageBoardSection>
        )
	}
}

export default PersonalBoards
