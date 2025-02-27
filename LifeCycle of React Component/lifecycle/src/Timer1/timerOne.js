import { Component } from "react";

class TimerOne extends Component {
  constructor() {
    super()
    console.log("TimerOne constructor");
    this.state = {
      time: 0
    }
    this.timer = null;
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }


  handleCount = () => {
    const { time } = this.state;
    this.setState({
      time: time + 1
    })
  }

  render() {
    console.log("TimerOne render");
    return (
      <>
        <h1>Timer <p>{new Date(this.state.time * 1000).toISOString().slice(11, 19)}</p></h1>

      </>
    )
  }

  componentDidMount() {
    console.log("TimerOne component did Mount");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1
      }))
    }, 1000)

    // this.setTimeoutInterval = setTimeout(() => {
    //   clearInterval(this.timer);
    //   console.log("Timer stopped after 30 seconds");

    // }, 30000)

  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("TimerOne componentDidUpdate");
    if (this.state.time >= 30) {
      clearInterval(this.timer);
      console.log("Timer stopped after 30 seconds");

    }

  }

  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");

  }
}

export default TimerOne;