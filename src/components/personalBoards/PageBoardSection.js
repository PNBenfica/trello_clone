import React from 'react'
import PageBoardSectionTitle from "./PageBoardSectionTitle"
import "./PageBoardSection.css"

const PageBoardSection = (props) => {

    const { icon, name } = props

    return (
        <section className="page-board-section">
            <PageBoardSectionTitle name={name} icon={icon}/>
            <div>
                { props.children }
            </div>
        </section>
    )
}

export default PageBoardSection