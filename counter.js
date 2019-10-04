class App extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }
  
  render() {
    return (
      <div>
        <button onClick={this.increment10.bind(this)}>+10</button>
        <button onClick={this.increment.bind(this)}>+</button>
        <output>{this.state.counter}</output>
        <button onClick={this.decrement.bind(this)}>-</button>         
        <button onClick={this.decrement10.bind(this)}>-10</button>
      </div>
    );
  }
  
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  increment10() {
    this.setState({
      counter: this.state.counter + 10
    })
  }
  
  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
   decrement10() {
    this.setState({
      counter: this.state.counter - 10
    })
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
