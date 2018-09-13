import React, { Component } from 'react';
import Controls from './Controls';
import Result from './Result';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      cnt: 10
    }
  }

//   plus(arg){
//   this.setState({cnt: this.state.cnt + 1})
// }
//
//   minus(){
//     this.setState({cnt: this.state.cnt - 1})
//   }

  countChange(a){
    this.setState({cnt: a});
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <Controls
          count={this.state.cnt}
          onChange={(e) => this.countChange(e)}
          // functionPlus={() => this.plus()}
          // functionMinus={() => this.minus()}
        />
        <Result result={this.state.cnt}/>

      </div>
    );
  }
}

export default App;
