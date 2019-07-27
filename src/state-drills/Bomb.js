import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(props)
    this.state = {
      count: 0,
      bombState: 'tick'
    }
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