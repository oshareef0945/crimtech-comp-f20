import logo from './logo.svg';
import './App.css';
import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start_time: 0, ran_once: false, counting: false, true_duration: 0, reaction_time: 0, color: 'green'};
    this.process_click = this.process_click.bind(this);
  }
  handle_color = (c) => {
      this.setState({color: c})
  }
  start_count() {
      // Random number between 2 and 7
      let duration = Math.random()*5 + 2
      
      //  Updating the state variables
      this.setState({start_time: window.performance.now(), counting: true, true_duration: duration, color: 'darkred'});
      
      // Changes the  button back to green
      setTimeout(() => this.handle_color('green'), duration * 1000)
  }
  end_count() {
      let elapsed_time = (window.performance.now() - this.state.start_time);
      
      if(elapsed_time > this.state.true_duration*1000) {
                this.setState({ran_once: true, counting: false, reaction_time: elapsed_time - this.state.true_duration*1000});
      }
  }
  process_click() {
    if (this.state.counting) {
      this.end_count();
    } else this.start_count();
  }
  render() {
      var  msg = ""
      if(this.state.counting) {
          if(this.state.color == 'darkred') {
              msg = "Wait for Green";
          } else {
              msg = "Click!"
          }
      } else if (this.state.ran_once ==  true) {
          msg = `Your reaction time is ${this.state.reaction_time.toFixed(4)} ms`
      } else {
          msg = "Click me to begin!"
      }
    
    return (
      <div className = "PanelContainer" onClick = {this.process_click} style={ { background: this.state.color} }>
        <div className = "Panel">{msg}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className =  "Header">How Fast is your Reaction Time?</h1>
        <Panel />
        <p>Click as soon as the red box turns green. Click anywhere in the box to start.</p>
      </header>
    </div>
  );
}

export default App;
