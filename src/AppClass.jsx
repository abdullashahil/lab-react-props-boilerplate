import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{


  // code here
  render(){
    const imgData = this.props.propt2();

    return(
      <div className='body'>
            <h1 className="heading">Gallery Class</h1>
        <div className='Bigdiv'>
  
    {imgData.map((obj)=>{
      return(
        <img src={obj.img}/>
      )
    })}
    </div>
    </div>
      
    )
  }
}
