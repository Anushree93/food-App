import React from "react"

class Child1 extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor of Child1'+ this.props.name);
    }

    componentDidMount(){
        console.log('compoentDidMount of Child1'+ this.props.name);
    }

    render(){
        console.log('render of Child1');
        return <div>This is child1</div>
    }
}

export default Child1