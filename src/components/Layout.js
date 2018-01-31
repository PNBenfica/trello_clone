import React from 'react'
import NavBarContainer from '../containers/NavBarContainer'

const Layout = ({ children }) => {
  
  return (
    <section>

        <NavBarContainer />
        
        { children }
        
    </section>
  )
}

export default Layout