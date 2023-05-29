import React, { Component } from "react";
import { Button } from 'antd-mobile'
import Hooks from '../components/hooks';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'xiaoxx'
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="test-box">
        <h1>hello world</h1>
        <p>{ this.state.name }</p>
        <p>{ this.state.count }</p>
        <button onClick={this.handleClick}>点击+1</button>
        <Button type="button" color="primary" fill="solid">点击</Button>
        <Hooks></Hooks>
      </div>
    )
  }
}

export default Test