import React, { Component } from 'react';
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      likes: 0,
      word: 'likes'
    }
  }

  increaseLikes = () => {
    let likeCount = this.state.likes
    likeCount++
    let usedWord = 'likes'

    if (likeCount === 1){
      usedWord = 'like'
    }

    this.setState({
      likes: likeCount,
      word: usedWord
    })
  }

  render(){
    return(
      <div id="myButton" onMouseDown={this.increaseLikes}>
        <p>{this.state.likes} {this.state.word}</p>
      </div>
    )
  }
}


export default App;
