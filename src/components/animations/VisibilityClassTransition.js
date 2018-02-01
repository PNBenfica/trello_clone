import React from 'react'

import addClass from 'dom-helpers/class/addClass'
import removeClass from 'dom-helpers/class/removeClass'

export default class VisibilityClassTransition extends React.Component {

    constructor(props){
        super(...props)
    }

    componentWillMount(){
        const { timeout } = this.props
        this.setVisibilityClass("invisible")
        setTimeout(() => this.setVisibilityClass("visible"), timeout)
    }

    setVisibilityClass(visibility){
        const { children, className } = this.props
        this.children = React.Children.map(children, child => {
            const _className = `${child.props.className} ${className}-${visibility}`;
            const props = { ...child.props, className: _className };
            return React.cloneElement(child, props);
        });
    }

    render(){
        return this.children
    }

}