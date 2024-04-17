import React, { Component } from 'react'
import "./editor.css"

export default class Editor extends Component {
  
  constructor(props){
    super(props);
    
    this.state ={
      value: ""
    };

  }

  handleChane=(e)=>{
       this.setState({value: e.target.value})
  }


  render() {
    return (
      <div className="container">
         <div className="input">
             <h3>Input</h3>
             <textarea className="input-text" onChange={this.handleChane} value={this.state.value}/>
         </div>
         <div className="output">
             <h3>Pro Note</h3>
             <div className="output-text">{this.state.value}</div>
         </div>                
      </div>
    )
  }
}
