import React, { Component } from 'react'
import './ClickMeGame.css'
export class ClickMeGameProject extends Component {
    constructor(){
        super();
        this.state={time:10,score:0}
    }
    handleClick(){
        if(this.state.time!==0){
        this.setState({
              score:this.state.score+1
        })
    }}
    handleClick1(){
        this.setState({
            time:10,
            score:0,
            message:''
        })
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.time===0)
        {
             this.setState({
                   message:"Enough I can't be beaten by you",
                   
             })
           
        }
        
        else
        {
            this.setState({
                time:this.state.time-1,
            })
        }

        
    }
  render() {
    return (
      <div>
            <h2 className='text'>Click the picture as many times as you can in {this.state.time} wacky seconds!</h2>
            <img onClick={this.handleClick.bind(this)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUQtC1EF-1TzA3_RT8BnhcXyIs5_2cSeA8w&usqp=CAU" alt="Tom-img" height="400px" width="400px" />
            <h2 className='text2'>Score:{this.state.score}</h2> 
            <h2 className='text3'>{this.state.message}</h2>
            <button onClick={this.handleClick1.bind(this)}>Restart</button>
      </div>
    )
  }
}

export default ClickMeGameProject