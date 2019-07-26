import React from 'react';


class HelloWorld extends React.Component {
  state ={
    who: 'world'
  };

  handleClick = (data) => {
    console.log(data)
    this.setState({
      who: data
    })
  }
  
  render(){
    return(
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={((e)=>this.handleClick('world'))}>World</button>
        <button onClick={((e)=>this.handleClick('friend'))}>Friend</button>
        <button onClick={((e)=>this.handleClick('React'))}>React</button>
      </div>
    )
  }
}

export default HelloWorld;