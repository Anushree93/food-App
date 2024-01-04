 import React from "react"
 //import Child1 from "./Child1"
 //import Child2 from "./Child2"
 import UserContext from "../utils/UserContext";

 class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
          userInfo:{
            name:'A',
            bio:'B',
            company:'C',
            login:'D'
        }
        }
        //console.log('Constructor of About');
    }

    async componentDidMount(){
       const data = await fetch('https://api.github.com/users/Anushree93');
       const result = await data.json();
       this.setState({userInfo:result})
        //console.log('compoentDidMount of About');
    }
 
    render(){
        //console.log('render of About');
        return (<div>
          <h1 className="font-extrabold"> {this.state.userInfo.name} </h1>
          <img src={this.state.userInfo.avatar_url}/>
          <h1> {this.state.userInfo.bio} </h1>
          <h1> {this.state.userInfo.company} </h1>
          <h1> {this.state.userInfo.login} </h1>
          <div className="inline"> Username : 
            <UserContext.Consumer>
              {({loggedInUser}) => 
                <h1 className="inline">{loggedInUser}</h1> 
              }
            </UserContext.Consumer>
          </div>
          {/* <Child1 name={'Anushree'}/>
          <Child2 surname={'Deshmukh'}/> */}
          {/* <button>Counter: {this.state.count}</button><br></br>
          <button className="border mx-2 my-2 px-1 py-1" onClick={()=>{this.setState(count=this.state.count+1)}}>Incremenet</button>
          <button className="border mx-2 my-2 px-1 py-1" onClick={()=>{this.setState(count=this.state.count-1)}}>Decrement</button> */}
        </div>)
    }
 }

 export default About