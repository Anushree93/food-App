import React from "react"

class Child2 extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor of Child2'+ this.props.surname);
    }

    componentDidMount(){
        console.log('compoentDidMount of Child2'+ this.props.surname);
    }

    render(){
        console.log('render of Child2');
        return <div>This is child2</div>
    }
}

export default Child2