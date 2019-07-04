import React from 'react'; 
import { connect } from 'react-redux';
import { increment, decrement, reset} from './actions';


const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
}

class Counter extends React.Component {
  // state = { count: 0 }

  increment = () => {
    this.props.increment();
    // this.setState({
    //   count: this.state.count + 1
    // });    
  }

  decrement = () => {
    this.props.decrement();
    // this.setState({
    //   count: this.state.count - 1,
    // })
  }
  reset = () => {
    this.props.reset()
  }
  render() {
    return (
      <div>
        <h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
          <div>
            <button onClick={this.reset}>Reset</button>
          </div>
        </h2>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

