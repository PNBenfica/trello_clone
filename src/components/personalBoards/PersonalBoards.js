import React, { Component } from 'react'
import AddBoardCard from "./addBoard/AddBoardCard"
import PersonalBoard from "./PersonalBoard"
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
        const nBoards = boards.length

		return (
            <PageBoardSection name="Personal Boards" icon={<UserSvg/>}>
                <div className="personal-boards-grid">
                    {boards.map((board,i) => <PersonalBoard key={i} {...board} timeout={i * 200} /> )}
                    <AddBoardCard key={nBoards} timeout={nBoards * 200} />
                </div>
            </PageBoardSection>
        )
	}
}

export default PersonalBoards
