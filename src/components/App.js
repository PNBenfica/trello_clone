import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ActiveBoardContainer from '../containers/ActiveBoardContainer'
import BoardsContainer from '../containers/BoardsContainer'
import Layout from './Layout'

const App = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 1500, exit: 1500 }


    return (
        <Layout>
            <TransitionGroup component="main" className="page-main">
                <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
                    <section className="page-main-inner">
                        <Switch location={location}>
                            <Route path="/" exact component={BoardsContainer} />
                            <Route path="/board/:id"  component={ActiveBoardContainer} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    )
}




export default withRouter(App)


// class App extends Component {

//   	render() {

//         // const colors = ["rgb(0, 121, 191)", "rgb(210, 144, 52)", "rgb(81, 152, 57)", "rgb(176, 70, 50)", "rgb(137, 96, 158)", "rgb(205, 90, 145)", "rgb(75, 191, 107)", "rgb(0, 174, 204)", "rgb(131, 140, 145)"]
//         // const boards = [...Array(9).keys()].map(n => { return { id: n, name: "Project " + n, color: colors[n] }} )

// 		// return (
//             // <div>

//             //     <NavBar />

//             //     <PersonalBoards boards={boards}/>

//             // </div>

//         // )
//         return (
//             <Layout>
            
//             </Layout>
//         )
// 	}
// }