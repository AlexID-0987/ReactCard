import React from "react";

class Person extends React.Component{
    constructor (props){
        super(props)
        this.name= props.name
        this.photo=props.photo
        this.likefun=this.likefun.bind(this)
        this.state={likes:1,likes1:0}
        this.likef=this.likef.bind(this)
    }
    likefun(){
        this.setState({likes: this.state.likes +1})
        //this.setState(state=>{
           // return {likes:state.likes+1}
        //})
    }
    likef(){
        this.setState({likes1: this.state.likes1 -1})
        //this.setState(state=>{
        // return {likes:state.likes+1}
        //})
    }
    render(){
        return(
            <div className="card">
                <div className="photo">
                    <img src={this.photo}/>
                </div>
                <div className="emoji">
                    <div className="like" onClick={this.likefun}>
                        <img src="https://img.icons8.com/emoji/48/000000/heart-suit.png"/>
                        <span className="counter">{this.state.likes}</span>
                    </div>
                    <div className="like1" onClick={this.likef}>
                        <img src="https://img.icons8.com/emoji/48/000000/-emoji-jack-o-lantern.png"/>
                        <span className="counter1">{this.state.likes1}</span>
                    </div>
                </div>
                <div className="lab">
                    <h1 style={{color:this.state.likes >=5 ? 'green':'black' }}>{this.name}</h1>
                </div>
            </div>
        )
    }
}








export  default Person