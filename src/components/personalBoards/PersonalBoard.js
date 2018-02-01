import React from 'react'
import BoardCard from './BoardCard'
import { NavLink } from 'react-router-dom'

const PersonalBoard = (props) => {
    const { color, id, name, timeout } = props

    return (
        <BoardCard timeout={timeout}>
            <NavLink to={"/board/" + id} className="board-card personal-board-card" >
                <div className="inner-item">
                    <div className="background" style={{backgroundColor: color}}></div>
                    <p>{name}</p>
                </div>
            </NavLink>
        </BoardCard>
    )
}

export default PersonalBoard