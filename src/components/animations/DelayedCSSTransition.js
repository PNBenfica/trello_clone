import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default class DelayedCSSTransition extends React.Component {

    constructor(props){
        super(...props)
        this.state = { visible: false }
    }

    componentDidMount(){
        setTimeout(() => this.setState({ visible: true }), this.props.delay)
    }

    render(){

        let { children, ...props } = this.props
        props = { ...props, in: this.state.visible && ( props.in || props.in === undefined) }

        return (
            <CSSTransition {...props}>
                { children }
            </CSSTransition>
        )
    }

}