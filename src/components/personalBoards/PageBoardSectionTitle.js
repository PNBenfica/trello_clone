import React from 'react'

const PageBoardSectionTitle = (props) => {

    const { icon, name } = props

    return (
        <div className="page-board-section-title">
            { icon }
            <p>{name}</p>
        </div>
    )
}

export default PageBoardSectionTitle