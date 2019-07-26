import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(props)
    this.state = {
      count: 0,
      bombState: 'tick'
    }
    console.log('constructor')
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  renderElement(){
    if (this.state.count % 2 === 0){
      this.setState({
        bombState: 'tick'
      })
      return <p>{this.state.bombState}</p>
    }
    else if (this.state.count % 2 === 1){
      this.setState({
        bombState: 'tock'
      })
      return <p>{this.state.bombState}</p>
    }
    else if (this.state.count >= 8){
      this.setState({
        bombState: 'BOOM!!!!'
      })
      return <p>{this.state.bombState}</p>
    }
  }

  render() {
    let bomb;
    if (this.state.count >= 8){
      bomb = <p>BOOM!!!!</p>
    }
    else if (this.state.count % 2 === 1){
      bomb = <p>tock</p>
    }
    else if (this.state.count % 2 === 0){
      bomb =  <p>tick</p>
    }
    return (
      <div>
        {bomb}
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default Bomb;