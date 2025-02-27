import { Component } from 'react';
import TimerOne from './Timer1/timerOne';

class App extends Component {

  constructor() {
    super()
    this.state = {
      mount: false
    }
  }

  handleMount = () => {
    this.setState((prevState) => ({ mount: !prevState.mount }))
  }
  render() {


    return (
      <>
        {/* <ComponentA /> */}
        <button onClick={this.handleMount}>{this.state.mount ? "UN-MOUNT" : "MOUNT"}</button>
        {this.state.mount ? <TimerOne /> : null}
      </>
    );
  }
}

export default App;